const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1/Ramkrushna"
const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    console.log('mongodb connects successfully')
}
module.exports = connectToMongo;