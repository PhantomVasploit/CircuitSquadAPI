const {Schema, default: mongoose} = require('mongoose');

const serviceSchema = new Schema({
    name: {
        type: String,
        required: [true, "Service name is required"],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, "Service amount is required"]
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'patient'
    }
});

const Service = mongoose.model('service', serviceSchema);
module.exports = Service;
