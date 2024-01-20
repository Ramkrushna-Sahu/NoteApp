const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const JWT_SECRET ="RamkrushnaSahu"

//Create a user using POST "/api/auth/signup". No login required
router.post('/signup', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    // If error occurs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        // Check email is unique or not 
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "User with this email is already exist" })
        }
        // Generate a salt & hash them with user password
        const salt = await bcrypt.genSalt(10);
        securePassword= await bcrypt.hash(req.body.password,salt);

        // create a user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword
        })
        const data={
            user:{
                id:user.id
            }
        }
        const authToken= jwt.sign(data,JWT_SECRET)
        res.json({authToken})

        // .then((user)=>{
        //     res.json(user)
        // }).catch((err)=>{
        //     console.log(err)
        //     res.json({error:"Please Enter a Unique Value",message:err.message})
        // })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Something went wrong')
    }
})


//Authenticate a user using POST "/api/auth/login". No log in required
router.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', "Password can't be a blank").exists()
], async (req, res) => {
    // If error occurs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const {email, password}= req.body;
    try {
        let user = await User.findOne({email});
        // console.log(user)
        if (!user) {
            return res.status(400).json({ error: "Please try to login with valid credentials."})
        }
        // compare the password from database & password given by the user
        const comparePassword= await bcrypt.compare(password,user.password)
        // console.log(comparePassword)
        if(!comparePassword){
            return res.status(400).json({ error: "Please try to login with valid credentials."})
        }
        const payload={
            user:{
                id:user.id
            }
        }
        // Encrypt the data using secret key
        const authToken= jwt.sign(payload,JWT_SECRET)
        res.json({authToken})
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal server error')
    }
})

// Get logged in user details using POST "/api/auth/getUser". login required
router.post('/getuser',fetchUser, async (req, res) => {
    try {
        let userId = req.user.id
        let user = await User.findById(userId).select('-password')
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Something went wrong')
    }
})
module.exports = router;