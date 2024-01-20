const jwt = require('jsonwebtoken')
const JWT_SECRET ="RamkrushnaSahu"

const fetchUser = (req,res,next)=>{
    // get the user from jwt token & add id to the req Object
    const token = req.header('auth-token')//extracting the value of the 'auth-token' header from an incoming HTTP request
    // console.log(token)
    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        // Decrypts the token
        const data= jwt.verify(token,JWT_SECRET)
        req.user = data.user
        // console.log(data)
        next()
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"})
    }

}
module.exports=fetchUser