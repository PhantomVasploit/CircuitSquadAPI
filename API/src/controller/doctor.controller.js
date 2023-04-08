const bcrypt = require('bcrypt');

const Doctor = require('../models/Doctor.model');
const { createToken } = require('../utils/token');

module.exports.registerDoctor = (req, res)=>{
    const {
        firstName, 
        lastName, 
        email, 
        phoneNumber, 
        address, 
        licenseNumber, 
        specialization, 
        password
    } = req.body;
    Doctor.findOne({where: {email}})
    .then((doctor)=>{
        if(!doctor)
        {
            Doctor.create({firstName, lastName, email, phoneNumber, address, licenseNumber, specialization, password})
            .then((doctor)=>{
                const jwt = createToken({id: doctor.id, permissions: doctor.isDoctor});
                res.status(201).json({message: 'Doctor account created successfully', doctor, jwt})
            })
            .catch((e)=>{
                throw e;
            })
        }else{
            res.status(400).json({message: 'The email provided is already registered. Please sign in instead.'})
        }
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.loginDoctor = async(req, res)=>{
    const { email, password } = req.body;
    try
    {
        const doctor = await Doctor.findOne({where: {email}});
        if(!doctor)
        {
            res.status(400).json({message: 'Invalid login credentials'});
        }else
        {
            const valid = await bcrypt.compare(password, doctor.password);
            if(!valid)
            {
                res.status(400).json({message: 'Invalid login credentials'});
            }else
            {
                const jwt = createToken({id: doctor.id, permissions: doctor.isDoctor});
                res.status(200).json({message: 'Login successful', jwt, doctor});
            }
        }
    }
    catch(e){
        throw e;
    }
}

module.exports.getDoctor = (req, res)=>{
    const id = req.params.id;
    Doctor.findByPk(id)
    .then((doctor)=>{
        if(!doctor)
        {
            res.status(400).json({message: 'No doctor account with that id'});
        }else
        {
            res.status(200).json({message: 'Fetch successful', doctor});
        }
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getDoctors = (req, res)=>{
    Doctor.findAll()
    .then((doctors)=>{
        res.status(200).json({message: 'Fetch successful', doctors});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.updateDoctor = (req, res)=>{
    const doctorId = req.params.id;
    Doctor.findByPk(doctorId)
    .then((doctor)=>{
        doctor.update(req.body)
        .then(()=>{
            res.status(200).json({message: 'Doctor details updated successfully'});
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.deleteDoctor = (req, res)=>{
    const id = req.params.id;
    Doctor.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Doctor account deleted successfully'});
    })
    .catch((e)=>{
        throw e;
    })
}