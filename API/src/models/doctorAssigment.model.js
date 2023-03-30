const {Schema, default: mongoose} = require('mongoose');

const doctorAssigmentSchema = new Schema({
    hospitalId: {
        type: Schema.Types.ObjectId,
        ref: 'hospital',
        required: [true, "Hospital Id is required"]
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'doctor',
        required: [true, 'Doctor Id field id required']
    },
    dateOfAssignment: {
        type: Date,
        required: [true, "Date of assigment is required"],
        trim: true
    },
    doctorDepartment: {
        type: String,
        required: [true, "Doctor' department is required"],
        trim: true
    },
    doctorRole: {
        type: String,
        required: [true, "Doctor's role is required"],
        trim: true
    }
});

const DoctorDepartment = mongoose.model('doctorAssigment', doctorAssigmentSchema);
module.exports = DoctorDepartment;