const {Router} = require('express');
const router = Router();
const usuario = require('../usuarios.json');
const _ = require('underscore');

router.get('/getusuarios', (req,res) => {
    res.json({'statusCode': 200, 'message':"Lista de usuarios", data: usuario});
});

router.post('/guardarusuario', (req,res) => {
    const {nombre, apellido, email, telefono} = req.body;
    if(nombre && apellido && email && telefono){
        const id = usuario.length + 1;
        const nuevoUsuario = {...req.body, id};
        usuario.push(nuevoUsuario);
        res.json({'statusCode': 200, 'message':"Usuario almacenado correctamente", data: usuario})
    } else{
        res.json({'statusCode': 500, 'message':"Error faltan datos"})
    }
});

router.put('/actualizar/:id', (req,res) => {
    const {id} = req.params;
    const {nombre, apellido, email, telefono} = req.body;
    if(nombre && apellido && email && telefono){
        _.each(usuario,(user, i) =>{
            if(user.id == id){
                user.nombre = nombre;
                user.apellido = apellido;
                user.email = email;
                user.telefono = telefono;
            }
        });
        res.json({'statusCode': 200, 'message':"Update usuario", data: usuario});
    }else{

    }
    
});

router.delete("/eliminar/:id",(req,res) => {
    const {id} = req.params;
    console.log(req.params);
    _.each(usuario,(user,i)=>{
        if(user.id == id){
            usuario.splice(i,1);
        }
    })
    res.json({'statusCode': 200, 'message':"Usuario eliminado", data: usuario})
});



module.exports = router;