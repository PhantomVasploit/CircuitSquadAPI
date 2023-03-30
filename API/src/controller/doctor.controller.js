const _ = require('lodash');

const {createToken} = require('../utils/token');
const Doctor = require('../models/doctor.model');


module.exports.register = async(req, res)=>{
    const { firstName, lastName, email, phoneNumber, address, licenseNumber, specialization, gender, password, hospitalId } = req.body;
    const registeredDoctor = await Doctor.findOne({email});
    if(!registeredDoctor)
    {
        Doctor.create({ firstName, lastName, email, phoneNumber, address, licenseNumber, specialization, gender, password, hospitalId })
        .then((doctor)=>{
            const jwt = createToken(_.pick(doctor, ['_id']));
            res.status(201).json({message: 'Doctor resource created', jwt, doctor: _.pick(doctor, ['firstName', 'lastName', 'email', 'phoneNumber', 'address', 'licenseNumber', 'specialization', 'gender', 'password'])});
        })
        .catch((e)=>{
            throw e;
        })
    }else{
        res.status(400).json({message: 'This email is already registred'});
    }    
}