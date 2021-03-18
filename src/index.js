const express = require('express');
const app = express();
const watch = require('./watch');
const cors = require('cors');

const morgan  = require('morgan');
const { options } = require('./watch');

//configuracion
app.set('port', process.env.PORT || 5000);
app.set('json space', 2)

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(cors())

//router
app.use(require('./routes/index'));
app.use('/api/usuarios',require('./routes/usuarios'));


//app.use(require('./public/public.js'));

//iniciar servidor
app.listen(app.get('port'), () => {
    console.log(`Iniciar servidor ${5000}`);
})