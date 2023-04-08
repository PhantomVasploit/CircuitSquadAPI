const Appointment = require('../models/Appointment.model');


module.exports.createAppointment = (req, res)=>{
    const { date, notes, status } = req.body;
    Appointment.create({ date, notes, status })
    .then((appointment)=>{
        res.status(201).json({message: 'Appointment created successfully'})
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getAppointments = (req, res)=>{
    Appointment.findAll()
    .then((appointments)=>{
        res.status(200).json({message: 'Fetch successful', appointments});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getPatientAppointments = (req, res)=>{
    const patientId = req.params.patientId;
    Appointment.findAll({where: {PatientId: patientId}})
    .then((appointments)=>{
        res.status(200).json({message: 'Fetch successful', appointments});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getAppointmentsByDate = (req, res)=>{
    const date = req.params.date;
    Appointment.findAll({where: {date}})
    .then((appointments)=>{
        res.status(200).json({message: 'Fetch successful', appointments});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getDoctorAppointments = (req, res)=>{
    const doctorId = req.params.doctorId;
    Appointment.findAll({where: {DoctorId: doctorId}})
    .then((appointments)=>{
        res.status(200).json({message: 'Fetch successful', appointments});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.updateAppointment = (req, res)=>{
    const id = req.params.id;
    Appointment.findByPk(id)
    .then((appointment)=>{
        appointment.update(req.body)
        .then(()=>{
            res.status(200).json({message: 'Appointment updated successfully'});
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.deleteAppointment = (req, res)=>{
    const id = req.params.id;
    Appointment.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Appoint deleted successfully'});
    })
    .catch((e)=>{
        throw e;
    })
}