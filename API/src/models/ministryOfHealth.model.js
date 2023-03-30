const {Schema, default: mongoose} = require('mongoose');

const ministryOfHealthSchema = new Schema({
    ministryName: {
        type: String,
        required: [true, "Ministry name field is required"],
        trim: true,
    },
    ministryEmail: {
        type: String,
        required: [true, "Ministry email field is required"],
        trim: true
    },
    ministryPhoneNumber: {
        type: String,
        required: [true, "Ministry phone number field id required"],
        trim: true
    },
    ministryAddress: {
        type: String,
        required: [true, "Ministry address field is required"],
        trim: true
    },
    ministryPassword: {
        type: String,
        required: [true, "Ministry password field is required"],
        trim: true
    },
    hospitalId: {
        type: Schema.Types.ObjectId,
        required: [true, "Hospital Id is required"],
        ref: 'hospital'
    }
});

const MinistryOfHealth = mongoose.model('ministryOfHealth', ministryOfHealthSchema);
module.exports = MinistryOfHealth;