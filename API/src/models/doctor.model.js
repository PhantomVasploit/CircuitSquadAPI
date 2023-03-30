const {Schema, default: mongoose} = require('mongoose');

const doctorSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name field is required."],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Last name field is required."],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
        trim: true
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number field is required"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Address field is required"],
        trim: true
    },
    licenseNumber: {
        type: String,
        required: [true, "License number field is required"],
        trim: true
    },
    specialization: {
        type: String,
        required: [true, "Specilization field is required"],
        trim: true
    },
    gender: {
        type: String,
        required: [true, "Gender field is required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password field is required"],
        trim: true
    },
    hospitalId: {
        type: Schema.Types.ObjectId,
        ref: 'hospital',
        required: [true, "Hospital id is required"]
    }
});

const Doctor = mongoose.model('doctor', doctorSchema);
module.exports = Doctor;