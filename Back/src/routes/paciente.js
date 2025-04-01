/* import express from 'express';
import Patient from '../models/paciente.js';

const router = express.Router();

// Registrar un paciente
router.post('/', async (req, res) => {
  const { name, birth_date, gender, phone, address, email } = req.body;

  try {
    const newPatient = new Patient({
      name,
      birth_date,
      gender,
      phone,
      address,
      email
    });

    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error);  // Agregar detalles del error en consola
    res.status(500).json({ message: 'Error al registrar el paciente', error: error.message });
  }
});

// Obtener todos los pacientes
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);  // Agregar detalles del error en consola
    res.status(500).json({ message: 'Error al obtener pacientes', error: error.message });
  }
});

export default router;
 */



