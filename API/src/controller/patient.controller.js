const bcrypt = require('bcrypt');

const Patient = require('../models/Patient.model');
const { createToken } = require('../utils/token');

module.exports.registerPatient = (req, res)=>{
    const { 
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        dateOfBirth,
        gender,
        password,
        healthCondtion,
        insuranceMembershipNumber,
        isPatient
     } = req.body;

     Patient.findOne({where: {email}})
     .then((registerPatient)=>{
        if(!registerPatient)
        {
            Patient.create({
                firstName,
                lastName,
                email,
                phoneNumber,
                address,
                dateOfBirth,
                gender,
                password,
                healthCondtion,
                insuranceMembershipNumber
            })
            .then((patient)=>{
                const jwt = createToken({id: patient.id, isPatient: patient.isPatient});
                res.status(201).json({message: 'Patient account created successfully', patient, jwt});
            })
            .catch((e)=>{
                throw e;
            })
        }else
        {
            res.status(400).json({message: 'This email is already registered. Please login instead'});
        }
     })
}

module.exports.loginPatient = async (req, res)=>{
    const { email, password } = req.body;
    try
    {
        const patient = await Patient.findOne({where: {email}});
        if(!patient)
        {
            res.status(400).json({message: "Invalid login credentials"});
        }else
        {
            const valid = await bcrypt.compare(password, patient.password);
            if(!valid)
            {
                res.status(400).json({message: "Invalid login credentials"});
            }else
            {
                const jwt = createToken({id: patient.id, isPatient: patient.isPatient});
                res.status(200).json({message: 'Login successful', jwt, patient});
            }
        }
    }
    catch(e)
    {
        throw e;
    }
}


module.exports.getPatient = (req, res)=>{
    const id = req.params.id;
    Patient.findByPk(id)
    .then((patient)=>{
        res.status(200).json({message: 'Fetch successful', patient});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getPatients = (req, res)=>{
    Patient.findAll()
    .then((patients)=>{
        res.status(200).json({message: 'Fetch successful', patients});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.updatePatient = (req, res)=>{
    const id = req.params.id;
    Patient.findByPk(id)
    .then((patient)=>{
        patient.update(req.body)
        .then(()=>{
            res.status(200).json({message: 'Patient account updated successfully'});
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.deletePatient = (req, res)=>{
    const id = req.params.id;
    Patient.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Patient account deleted successfully'});
    })
    .catch((e)=>{
        throw e;
    })
}