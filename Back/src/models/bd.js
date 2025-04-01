// src/conexion.js
import mongoose from 'mongoose';
import config from '../models/config.js'; // Importar la configuración

const conexion = async () => {
  try {
    await mongoose.connect(config.dbURI); // Usar la URI desde config.js
    console.log("Conectado!!!");
  } catch (error) {
    console.log(`Ojo --->Error en la conexion: ${error}`);
  }
};

export default conexion;
