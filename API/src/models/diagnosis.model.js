const {Schema, default: mongoose} = require('mongoose');

const diagnosisSchema = new Schema({
    diaganosisType: {
        type: String,
        required: [true, "Diagnosis type is required"],
        trim: true
    },
    result: {
        type: String,
        required: [true, "Diagnosis result is required"],
        trim: true
    },
    glucoseLevel: {
        type: String,
        required: [true, "Glucose level is required"],
        trim: true
    },
    healthCondition: {
        type: String,
        required: [true, "Health condition is required"],
        trim: true
    },
    bloodPressure: {
        type: String,
        required: [true, "Blood pressure is required"],
        trim: true
    },
    bloodCount: {
        type: String,
        required: [true, "Blood count is required"],
        trim: true
    },
    urineAnalysis: {
        type: String,
        required: [true, "Urine analysis is required"],
        trim: true
    },
    bloodGroup: {
        type: String,
        required: [true, "Blood group is required"],
        trim: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'doctor'
    }
});

const Diagnosis = mongoose.model('diagnosis', diagnosisSchema);
module.exports = Diagnosis;