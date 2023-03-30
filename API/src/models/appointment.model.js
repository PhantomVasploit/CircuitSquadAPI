const {Schema, default: mongoose} = require('mongoose');

const appointmentSchema = new Schema({
    appointmentDate: {
        type: Date,
        required: [true, "Appointment date is required"],
    },
    appointmentTime: {
        type: String,
        required: [true, "Appointment time is required"]
    },
    appointmentNotes: {
        type: String,
        required: [true, "Appointment notes is required"],
        trim: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        required: [true, "Doctor Id is required"]
    },
    patientId: {
        type: Schema.Types.ObjectId,
        required: [true, "Patient Id is required"]
    },
    status: {
        type: Boolean,
        default: true
    },
    hospitalId: {
        type: Schema.Types.ObjectId,
        required: [true, "Hospital ID is required"]
    }
});

const Appointment  = mongoose.model('appointment', appointmentSchema);
module.exports = Appointment;