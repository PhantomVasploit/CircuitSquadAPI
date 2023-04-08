const Payment = require('../models/Payment.model');

module.exports.createPayment = (req, res)=>{
    const { paymentMethod, date, amount, status } = req.body;
    Payment.create({ paymentMethod, date, amount, status })
    .then((medication)=>{
        res.status(201).json({message: 'Payment created successfully', medication})
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getAllPayments = (req, res)=>{
    Payment.findAll()
    .then((payments)=>{
        res.status(200).json({message: 'Fetch successful', payments});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.getPayment = (req, res)=>{
    const id = req.params.id;
    Payment.findByPk(id)
    .then((payment)=>{
        res.status(200).json({message: 'Fetch successful', payment});
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.updatePayment = (req, res)=>{
    const id = req.params.id;
    Payment.findByPk(id)
    .then((payment)=>{
        payment.update(req.body)
        .then(()=>{
            res.status(200).json({message: 'Payment updated successfully'})
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}

module.exports.deletePayment = (req, res)=>{
    const id = req.params.id;
    Payment.destroy({where: {id}})
    .then(()=>{
        res.status(200).json({message: 'Payment deleted successfully'});
    })
    .catch((e)=>{
        throw e;
    })
}