const express = require("express")
const app = express()
const exphbs = require('express-handlebars')
const PORT = 3000;


//motor de plantilla
app.set('view engine', 'hbs')
app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs' 
}))

//ruta estática

app.use(express.static('assets'))
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css')) 
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist')) 


//vistas

app.get('/home', (req, res)=> {
    res.render('home',{
        title: 'Home',
    })
})
app.get('/productos', (req, res)=> {
    res.render('productos',{
        title: 'Productos',
        products:[banana, cebollas, lechuga, papas, pimenton, tomate]
    })
})

//ruta
app.get('/', (req,res)=>{
    res.send('Hello world!✨')
})

app.listen(PORT,()=>{
    console.log(`Server running on Port http://localhost:${PORT}`)
})