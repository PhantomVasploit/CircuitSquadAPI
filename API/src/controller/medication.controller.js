const Medication = require('../models/Medication.model');

module.exports.createMedication = (req ,res)=>{
    const { price, quantity, name, prescription } = req.body;
    Medication.create({ price, quantity, name, prescription })
    .then((medication)=>{
        res.status(201).json({message: 'Medication created successfully', medication});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getAllMedications = (req, res)=>{
    Medication.findAll()
    .then((medications)=>{
        res.status(200).json({message: 'Fetch successful', medications})
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getMedication = (req, res)=>{
    const id = req.params.id;
    Medication.findByPk(id)
    .then((medication)=>{
        res.status(200).json({message: 'Fetch successful', medication})
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.updateMedication = (req, res)=>{
    const id = req.params.id;
    Medication.findByPk(id)
    .then((medication)=>{
        medication.update(req.body)
        .then(()=>{
            res.status(200).json({message: 'Medication updated successfully'})
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.deleteMedication = (req, res)=>{
    const id = req.params.id;
    Medication.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Medication deleted successfully'});
    })
    .catch((e)=>{
        throw e;
    })
}