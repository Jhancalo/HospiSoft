import express from 'express';
import mongoose from 'mongoose';



 export const conexion= async()=>{

  mongoose.connect('mongodb://127.0.0.1:27017/HospiSoft')
}




