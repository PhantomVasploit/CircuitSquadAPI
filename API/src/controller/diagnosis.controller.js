const Diagnosis = require('../models/Diagnosis.model');

module.exports.createDiagnosis = (req, res)=>{
    const { 
        diagnosisType, 
        result, 
        glucoseLevel, 
        healthCondition, 
        bloodPressure, 
        bloodCount, 
        urineAnalysis, 
        bloodGroup
     } = req.body;

     Diagnosis.create({ 
        diagnosisType, 
        result, 
        glucoseLevel, 
        healthCondition, 
        bloodPressure, 
        bloodCount, 
        urineAnalysis, 
        bloodGroup
     })
     .then((diagnosis)=>{
        res.status(201).json({message: 'Diagnosis created successfully', diagnosis});
     })
     .catch((e)=>{
        throw e;
     })
}

module.exports.getAllDiagnosis = (req, res)=>{
    Diagnosis.findAll()
    .then((diagnosis)=>{
        res.status(200).json({message: 'Fetch successful', diagnosis});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getADiagnosis = (req, res)=>{
    const id = req.params.id;
    Diagnosis.findByPk(id)
    .then((diagnosis)=>{
        res.status(200).json({message: 'Fetch successful', diagnosis});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.updateDiagnosis = (req, res)=>{
    const id = req.params.id;
    Diagnosis.findByPk(id)
    .then((diagnosis)=>[
        diagnosis.update(req.body)
        .then(()=>[
            res.status(200).json({message: 'Diagnosis updated successfully'})
        ])
        .catch((e)=>{
            throw e;
        })
    ])
    .catch((e)=>{
        throw e;
    });
}

module.exports.deleteDiagnosis = (req, res)=>{
    const id = req.params.id;
    Diagnosis.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Diagnosis deleted successfully'});
    })
    .catch((e)=>{
        throw e;
    })
}