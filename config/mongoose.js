const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://GarimaJain:kPKjUaqgs0b1ApUZ@cluster0.whteafy.mongodb.net/?retryWrites=true&w=majority');

// ----->this the code for using the cloud mongodb atlas ------------------------------------------------------- 
// const url='mongodb+srv://GarimaJain:kPKjUaqgs0b1ApUZ@cluster0.whteafy.mongodb.net/?retryWrites=true&w=majority';
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}


const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;