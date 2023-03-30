const {Schema, default: mongoose} = require('mongoose');

const insuranceCompanySchema = new Schema({
    name: {
        type: String,
        required: [true, "Insurance company name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Insurance company email is required"],
        trim: true
    },
    phoneNumber: {
        type: String,
        required: [true, "Insurance company phone number is required"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Insurance company address is required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Insurance company password is required"],
        trim: true
    }
});

const InsuranceCompany = mongoose.model('insurance', insuranceCompanySchema);
module.exports = InsuranceCompany;