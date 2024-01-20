const express = require('express');
const router = express.Router();
const {body,validationResult}= require('express-validator')
const fetchUser = require('../middleware/fetchUser');
const Note = require('../models/Note')

// Get all the notes using POST "/api/notes/fetchnotes". log in required
router.get('/fetchnotes',fetchUser,async (req,res)=>{
    try {
        const notes = await Note.find({user:req.user.id}) 
        res.json(notes)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
})

// Add a new note using POST "/api/notes/addnote".log in require
router.post('/addnote',fetchUser,[
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Ddescription must be atleast 5 characters').isLength({min:5})
],async (req,res)=>{
    try {
        const {title ,description ,tag}=req.body
    // If error occurs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const note = new Note({
        title,description,tag,user:req.user.id
    })
    const saveNote= await note.save()
    res.json(saveNote)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
    
})

// Update a note using PUT "/api/notes/updatenote".log in require
router.put('/updatenote/:id',fetchUser,[
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Ddescription must be atleast 5 characters').isLength({min:5})
],async (req,res)=>{
    try {
        const {title ,description ,tag}=req.body
        //Create a new note object
        const newNote ={}
        if(title) newNote.title=title
        if(description) newNote.description=description
        if(tag) newNote.tag=tag

        // find the note to be updated & update it
        let note = await Note.findById(req.params.id)
        if(!note) res.status(404).send('Note Not Found')//if note is not available
        if(note.user.toString() !== req.user.id) res.status(401).send('Unauthorize User')//unauthorized user
        note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        // console.log(note)
        res.json(note)

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
    
})

// Delete a note using DELETE "/api/notes/deletenote".log in require
router.delete('/deletenote/:id',fetchUser,[
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Ddescription must be atleast 5 characters').isLength({min:5})
],async (req,res)=>{
    try {
        // find the note to be deleted & delete it
        let note = await Note.findById(req.params.id)
        if(!note) res.status(404).send('Note Not Found')//if note is not available
        if(note.user.toString() !== req.user.id) res.status(401).send('Unauthorize User')//unauthorized user
        note = await Note.findByIdAndDelete(req.params.id)
        // console.log(note)
        res.json({"Success":"Note has been deleted. ",note:note})
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Internal Server Error')
    }
    
})

module.exports= router;