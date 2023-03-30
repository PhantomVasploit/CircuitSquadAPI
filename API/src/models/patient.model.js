const {Schema, default: mongoose} = require('mongoose');

const patientSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Patient first name is required"],
        trim: true
    },
    lastName: {
        type: String,
        requuired: [true, "Patient last name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Patient email is required"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Patient address is required"],
        trim: true
    },
    phoneNumber: {
        type: String,
        required: [true, "Patient phone number is required"],
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: [true, "Patient gender is required"],
        trim: true
    },
    insuranceId: {
        type: Schema.Types.ObjectId,
        ref: 'insurance'
    },
    password: {
        type: String,
        required: [true, "Patient password is required"],
        trim: true
    },
    hospitalId: {
        type: Schema.Types.ObjectId,
        ref: 'hospital'
    },
    healthCondition: {
        type: String,
        required: [true, "Patient health condition status is required"],
        trim: true
    },
    insuranceMembershipNumber: {
        type: Number,
        required: [true, "Patient insurance membership number is required"],
        trim: true
    }
});

const Patient = mongoose.model('patient', patientSchema);
module.exports = Patient;