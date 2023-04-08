const Service = require('../models/Service.model');

module.exports.createService = (req, res)=>{
    const { name, amount } = req.body;
    Service.create({ name, amount })
    .then((service)=>{
        res.status(201).json({message: 'Service created successfully'});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getServices = (req, res)=>{
    Service.findAll()
    .then((services)=>{
        res.status(200).json({message: 'Fetch successful', services});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getService = (res, res)=>{
    const id = req.params.id;
    Service.findByPk(id)
    .then((service)=>{
        res.status(200).json({message: 'Fetch successful', service});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.updateService = (req, res)=>{
    const id = req.params.id;
    Service.findByPk(id)
    .then((service)=>{
        service.update(req.body);
        then(()=>{
            res.status(200).json({message: 'Service updated successfully'})
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.deleteService = (req, res)=>{
    const id = req.params.id;
    Service.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Service deleted successfully'});
    })
    .catch((e)=>{
        throw e;
    })
}