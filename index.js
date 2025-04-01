import cors from 'cors'
import express,{json} from 'express'
import {conexion} from './Back/src/controllers/bd.js'
// Rutas
const app=express()


// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor corriendo en el puerto 5000');
});