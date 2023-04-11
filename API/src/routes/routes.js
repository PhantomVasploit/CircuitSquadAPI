const express = require('express');
const router = express.Router();

const { requireAuth } = require('../middleware/authentication.middleware');
const { requireDocotorAuthorization } = require('../middleware/doctor.authorization.middleware');
const { requireHospitalAuthorization } = require('../middleware/hospital.authorization.middleware');
const { requireMinistryOfHealthAuthorization } = require('../middleware/ministryOfHealth.authorization.middleware');
const { requirePatientAuthorization } = require('../middleware/patient.authorization.middleware');

const { 
        registerDoctor, 
        loginDoctor, 
        getDoctor, 
        getDoctors, 
        updateDoctor, 
        deleteDoctor 
    } = require('../controller/doctor.controller');

const { 
        registerHospital, 
        loginHospital, 
        getHospital, 
        getHospitals, 
        updateHospital, 
        deleteHospital 
    } = require('../controller/hospital.controller');

const { 
        registerPatient, 
        loginPatient, 
        getPatient, 
        getPatients, 
        updatePatient, 
        deletePatient 
    } = require('../controller/patient.controller');

const {
        registerMinistryOfHealth,
        loginMinistryOfHealth,
        updateMinistryOfHealth,
        deleteMinistryOfHealth
    } = require('../controller/ministryOfHealth.controller');

const {
        registerInsuaranceCompany,
        loginInsuaranceCompany,
        getInsuaranceCompanies,
        getInsuaranceCompany,
        updateInsuaranceCompany,
        deleteInsuaranceCompany
    } = require('../controller/insuaranceCompany.controller');

const { 
        createAppointment, 
        getAppointments, 
        getAppointmentsByDate,
        getDoctorAppointments,
        getPatientAppointments, 
        updateAppointment, 
        deleteAppointment 
    } = require('../controller/appointment.controller');

const {
        createDiagnosis,
        getADiagnosis,
        getAllDiagnosis,
        updateDiagnosis,
        deleteDiagnosis
    } = require('../controller/diagnosis.controller');


const {
        createMedication,
        getAllMedications,
        getMedication,
        updateMedication,
        deleteMedication
    } = require('../controller/medication.controller'); 

const {
    createPayment,
    getAllPayments,
    getPayment,
    updatePayment,
    deletePayment
} = require('../controller/payment.controller');

const {
        createService,
        getService,
        getServices,
        updateService,
        deleteService
    } = require('../controller/service.controller');

// doctor routes
router.post('/doctor/register', registerDoctor);
router.post('/doctor/login', loginDoctor);
router.get('/doctor/:id', getDoctor);
router.get('/doctors', getDoctors);

router.put('/doctor/:id', updateDoctor);
router.delete('/doctor/:id', deleteDoctor);

//hospital routes
router.get('/hospitals', getHospitals);
router.get('/hospital/:id', getHospital);
router.post('/hospital/register', registerHospital);
router.post('/hospital/login', loginHospital);
router.put('/hospital/:id', updateHospital);
router.delete('/hospital/:id', deleteHospital);

//patient routes
router.get('/patients', getPatients);
router.get('/patient/:id', getPatient);
router.post('/patient/register', registerPatient);
router.post('/patient/login', loginPatient);
router.put('/patient/:id', updatePatient);
router.delete('/patient/:id', deletePatient);

//ministry of health routes
router.post('/ministryOfHealth/register', registerMinistryOfHealth);
router.post('/ministryOfHealth/login', loginMinistryOfHealth);
router.put('/ministryOfHealth/:id', updateMinistryOfHealth);
router.delete('/ministryOfHealth/:id', deleteMinistryOfHealth);

//insuarance company routes
router.get('/insuaranceCompany/:id', getInsuaranceCompany);
router.get('/insuaranceCompanies', getInsuaranceCompanies);
router.post('/insuaranceCompany/register', registerInsuaranceCompany);
router.post('/insuaranceCompany/login', loginInsuaranceCompany);
router.put('/insuaranceCompany/:id', updateInsuaranceCompany);
router.delete('/insuaranceCompany/:id', deleteInsuaranceCompany);

//appointment routes
router.get('/appointments', getAppointments);
router.get('/appointments/:date', getAppointmentsByDate);
router.get('/appointments/doctor/:doctorId', getDoctorAppointments);
router.get('/appointments/patient/:patientId', getPatientAppointments);
router.post('/appointment/:doctorId/:patientId', createAppointment);
router.put('/appointment/:id', updateAppointment);
router.delete('/appointment/:id', deleteAppointment);

//diagnosiis routes
router.get('/diagnosis', getAllDiagnosis);
router.get('/diagnosis/:id', getADiagnosis);
router.post('/diagnosis', createDiagnosis);
router.put('/diagnosis/:id', updateDiagnosis);
router.delete('/diagnosis/:id', deleteDiagnosis)

//medication routes
router.get('/medications', getAllMedications);
router.get('/medication/:id', getMedication);
router.post('/medication', createMedication);
router.put('/medication/:id', updateMedication);
router.delete('/medication/:id', deleteMedication);

//payment routes
router.get('/payments', getAllPayments);
router.get('/payment/:id', getPayment);
router.post('/payment', createPayment);
router.put('/payment/:id', updatePayment);
router.delete('/payment/:id', deletePayment);

//services route
router.get('/services', getServices);
router.get('/service/:id', getService);
router.post('/service', createService);
router.put('/service/:id', updateService);
router.delete('/service/:id', deleteService);

module.exports = router;