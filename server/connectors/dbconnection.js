const mongoose = require('mongoose');

const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
});
console.log("mongo connect");}
catch(error){
    console.log(error);
}};

module.exports= connectdb