const express = require("express")
const app = express();
const exphbs = require('express-handlebars');
const PORT = 3000;


//motor de plantilla
app.set('view engine', 'hbs')
app.engine('hbs', exphbs.engine({
    extname: 'hbs' 
}));
app.set('views',__dirname + '/views');

//ruta estática
app.use(express.static('assets'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/css'))


//ruta
// app.get('/', (req,res)=>{
//     res.send('Hello world!✨')
// })


//vista
app.get('/', (req,res)=>{
    res.render("home", {
        title: 'home',
      products: [
        "banana",
        "cebollas",
        "pimenton",
        "papas",
        "lechuga",
        "tomate",
      ],
    });
})

app.listen(PORT,()=>{
    console.log(`Server running on Port http://localhost:${PORT}`)
});


