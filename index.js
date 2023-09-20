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