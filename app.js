// setup to express app
const express=require("express");
const path=require("path");
const app=express();

// setting the view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// serving the static file from the public directory
app.use(express.static(path.join(__dirname,'public')));


// Defin routes
const indexroute=require('./routes/index');
const aboutroute=require('./routes/about');


app.use('/',indexroute);
app.use('/about',aboutroute);


// creating the server
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
