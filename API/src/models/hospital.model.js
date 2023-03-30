const {Schema, default: mongoose} = require('mongoose');


const hospitalSchema = new Schema({
    name: {
        type: String,
        required: [true, "Hospital name is reuired"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Hospital email is required"],
        trim: true
    },
    phoneNumber: {
        type: String,
        required: [true, "Hospital phone number is required"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Hospital address is required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Hospital password is required"]
    }
});

const Hospital = mongoose.model('hospital', hospitalSchema);
module.exports = Hospital;