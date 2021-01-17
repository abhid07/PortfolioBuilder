const mongoose = require('mongoose');
let password = "root"
let dbname = "portfolio"
mongoose.connect(`mongodb+srv://admin:${password}@cluster0.ljkaz.mongodb.net/${dbname}?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(ok=>{console.log("Database connected")})
.catch(err=>{console.log(err)})

module.exports = mongoose