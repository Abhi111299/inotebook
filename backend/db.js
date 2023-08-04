const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = ()=>{
    mongoose.connect(uri, ()=> {
        console.log("connected succesfully");
    })
}

module.exports = connectToMongo;