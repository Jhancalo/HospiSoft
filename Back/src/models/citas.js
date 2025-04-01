import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  doctor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  appointment_date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Pendiente', 'Realizada', 'Cancelada'],
    default: 'Pendiente'
  },
  reason: {
    type: String,
    required: true
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
