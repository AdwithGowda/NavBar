const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://AdwithGowda:Ag22187120@adwithgowda.mwyx3lv.mongodb.net/?retryWrites=true&w=majority',{
useUnifiedTopology:true,
useNewUrlParser:true,
})
.then((response) =>{
    console.log("connected to data base");
})
.catch((error) =>{
    console.log(error)
});