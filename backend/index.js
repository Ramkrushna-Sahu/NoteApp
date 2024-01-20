const express= require('express')
const connectToMongo = require('./db')

connectToMongo()

const app=express()
const port=5000

app.use(express.json())

// Available routes
//Authentication Routes (signup, login & get user details)
app.use('/api/auth',require('./routes/auth'))
//Fetch notes, Add note, Update note, Delete note
app.use('/api/notes',require('./routes/notes'))

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`)
})