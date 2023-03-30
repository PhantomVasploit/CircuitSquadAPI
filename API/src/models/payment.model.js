const {Schema, default: mongoose} = require('mongoose');

const paymentSchema = new Schema({
    method: {
        type: String,
        required: [true, "Payment method is required"],
        trim: true
    },
    date: {
        type: Date,
        required: [true, "Payment date is required"],
    },
    amount: {
        type: Number,
        required: [true, "Payment amount is required"]
    },
    doctorId: {
        types: Schema.Types.ObjectId,
        ref: 'doctor'
    },
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'patient'
    },
    status: {
        type: Boolean,
        default: true
    },
    appointmentId: {
        type: Schema.Types.ObjectId,
        ref: 'appointment'
    },
    serviceId: {
        types: Schema.Types.ObjectId,
        ref: 'service'
    }
});

const Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment;