const bcrypt = require('bcrypt');
const MinistryOfHealth = require('../models/MinistryOfHealth.model');
const { createToken } = require('../utils/token');

module.exports.registerMinistryOfHealth = (req, res)=>{
    const { name, email, phoneNumber, address, password } = req.body;

    MinistryOfHealth.findOne({where: {email}})
    .then((registeredMinistryOfHealth)=>{
        if(!registeredMinistryOfHealth)
        {
            MinistryOfHealth.create({ name, email, phoneNumber, address, password })
            .then((ministryOfHealth)=>{
                const jwt = createToken({ id: ministryOfHealth.id, isMinistryOfHealth: ministryOfHealth.isMinistryOfHealth })
                res.status(201).json({message: 'Account created successfully', ministryOfHealth, jwt});
            })
            .catch((e)=>{
                throw e;
            })
        }else
        {
            res.status(400).json({message: 'This email is already registered'});
        }
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.loginMinistryOfHealth = async(req, res)=>{
    const { email, password } = req.body;
    try
    {
        const ministryOfHealth = await MinistryOfHealth.findOne({where: {email}});
        if(!ministryOfHealth)
        {
            res.status(400).json({message: 'Inalid login credentials'})
        }else
        {
            const valid = await bcrypt.compare(password, ministryOfHealth.password);
            if(!valid)
            {
                res.status(400).json({message: 'Invalid login credentails'});
            }else
            {
                const jwt = createToken({id: ministryOfHealth.id, isMinistryOfHealth: ministryOfHealth.isMinistryOfHealth});
                res.status(200).json({message: 'Login successful', jwt, ministryOfHealth});
            }
        }
    }
    catch(e){
        throw e;
    }
}

module.exports.updateMinistryOfHealth = (req, res)=>{
    const id = req.params.id;
    MinistryOfHealth.findByPk(id)
    .then((ministryOfHealth)=>{
        ministryOfHealth.update(req.body)
        .then(()=>{
            res.status(200).json({message: 'Ministry of health account is updated successfully'})
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.deleteMinistryOfHealth = (req, res)=>{
    const id = req.params.id;
    MinistryOfHealth.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Ministry of health account is deleted successfully'})
    })
    .catch((e)=>{
        throw e;
    })
}