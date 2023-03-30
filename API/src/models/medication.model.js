const {Schema, default: mongoose} = require('mongoose');

const medicationSchema = new Schema({
    price: {
        type: Number,
        required: [true, "Medication price is required"]
    },
    quantity: {
        type: Number,
        required: [true, "Medication quantity is required"]
    },
    name: {
        type: String,
        required: [true, "Medication name is required"],
        trim: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'doctor'
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'patient'
    },
    diagnosisId: {
        type: Schema.Types.ObjectId,
        ref: 'diagnosis'
    },
    appointmentId: {
        type: Schema.Types.ObjectId,
        ref: 'appointment'
    },
    prescription: {
        type: String,
        required: [true, "Medical prescription is required"],
        trim: true
    }
});

const Medication = mongoose.model('medication', medicationSchema);
module.exports = Medication;