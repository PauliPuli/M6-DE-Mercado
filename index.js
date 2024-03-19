const express = require("express")
const app = express()
const exphbs = require('express-handlebars')
const PORT = 3000;


//motor de plantilla
app.set('view engine', 'hbs')
app.engine('hbs', exphbs.engine({
    extname: 'hbs'
}));

app.set('views', __dirname + '/views')
//ruta estática

app.use(express.static('assets'))
app.use('/bootstrap', express.static('/node_modules/bootstrap/dist')) 
// app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')) 


//vistas

app.get('/home', (req, res)=> {
    res.render('home',{
        title: 'Home',
        products:[banana, cebollas, lechuga, papas, pimenton, tomate]
    })
});

//ruta
app.get('/', (req,res)=>{
    res.send('Hello world!✨')
})

app.listen(PORT,()=>{
    console.log(`Server running on Port http://localhost:${PORT}`)
})


// const expres = require('express');
// const app = expres();
// const PORT = 3000;


// //motor de plantillas
// app.set('view engine', 'hbs');
// app.engine('hbs', exphbs.engine({
//     extname: '.hbs',
// }));
// app.set ('views', __dirname + '/views');

// //rutas estaticas
// app.use(express.static('assets'));
// app.use('/booststrap', express.static('/node_modules/bootstrap/dist'));
// //rutas
// app.get('/', (req, res) => res.render('home',{
//     products:[
//         'bananas',
//         'cebolla',
//         'pimenton',
//         'papas',
//         'lechuga',
//         'tomate'
//     ]
// }));



