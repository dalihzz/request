const express = require('express')
const app = express()

app.get('/:user/:password', (req, res)=> {
    const {user, password} = req.params
     
    if (user === 'dalia' && password === '123' )  {
        res.json({msg: 'Inicio de sesión exitoso'})
        return
    }
    res.json ({msg:'Error en el usuario o la contraseña' })
})

// http://localhost:3000/login?fullname=dalia&password=123
app.get('/login', (req, res)=> { // Endpoint
    const {user, password} = req.query
    if (!user || !password)  { 
        res.status(400).json({
        msg: 'You need to provide <user> and <password> parameters'
    })
        return
    }

    if (user === 'dalia' && password === '123')  {
        res.json({msg: 'Inicio de sesión exitoso'})
        return
    }
    res.status(400).json({msg: 'Error en el usuario o la contraseña'})
})

app.post('/', (req, res)=> {res.json({msg:'Hello POST'})})
app.put('/', (req, res)=> {res.json({msg:'Hello PUT'})})
app.patch('/', (req, res)=> {res.json({msg:'Hello PATCH'})})
app.delete('/', (req, res)=> {res.json({msg:'Hello DELETE'})})

/*
*
*
*     FUNCIONALIDAD
*
*/
//http://localhost:3000/user

app.listen(3000,()=>{
    console.log('listening on port 3000')
})