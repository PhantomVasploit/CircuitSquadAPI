const bcrypt = require('bcrypt');

const Hospital = require('../models/Hospital.model');
const { createToken } = require('../utils/token');

module.exports.registerHospital = (req, res)=>{
    const {
        name,
        email,
        phoneNumber,
        address,
        password
     } = req.body;

     Hospital.findOne({ where: {email} })
     .then((registeredHospital)=>{
        if(!registeredHospital)
        {
            Hospital.create({
                name,
                email,
                phoneNumber,
                address,
                password
            })
            .then((hospital)=>{
                const jwt = createToken({ id: hospital.id, isHospital: hospital.isHospital});
                res.status(201).json({message: 'Hospital account created successfully', hospital, jwt});
            })
            .catch((e)=>{
                throw e;
            })
        }else
        {
            res.status(400).json({message: 'The email provided is already registered. Please sign in instead.'});
        }
     })
     .catch((e)=>{
        throw e;
     })
}


module.exports.loginHospital = async(req, res)=>{
    const { email, password } = req.body;
    try
    {
        const hospital = await Hospital.findOne({where: {email}});
        if(!hospital)
        {
            res.status(400).json({message: 'Invalid login credentials'});
        }else
        {
            const valid = await bcrypt.compare(password, hospital.password);
            if(!valid)
            {
                res.status(400).json({message: 'Invalid login credentials'});
            }else
            {
                const jwt = createToken({id: hospital.id, isHospital: hospital.isHospital});
                res.status(200).json({message: 'Login successful', hospital, jwt});
            }
        }
    }
    catch(e){
        throw e;
    }
}


module.exports.getHospitals = (req, res)=>{
    Hospital.findAll()
    .then((hospitals)=>{
        res.status(200).json({message: 'Fetch successful', hospitals});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getHospital = (req, res)=>{
    const id = req.params.id;
    Hospital.findByPk(id)
    .then((hospital)=>{
        res.status(200).json({message: 'Fetch successful', hospital});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.updateHospital = (req, res)=>{
    const id = req.params.id;
    Hospital.findByPk(id)
    .then((hospital)=>{
        hospital.update(req.body)
        .then(()=>{
            res.status(200).json({message: 'Hospital account updated successfully'});
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.deleteHospital = (req, res)=>{
    const id = req.params.id;
    Hospital.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Hospital account deleted successfully'})
    })
    .catch((e)=>{
        throw e;
    })
}