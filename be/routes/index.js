const express = require('express')
const routes = express.Router()

const UnitPlnController = require('../controllers/unitPln')
const PesertaPensiunController = require('../controllers/pesertaPensiun')
const TanggunganController = require('../controllers/tanggungan')
const UserController = require('../controllers/user')
const RegistrasiUlangController = require('../controllers/registrasiulang')

//user
routes.post('/api/users/signup', UserController.createUser)
routes.post('/api/users/login', UserController.loginUser)
routes.get('/api/users', UserController.getUsers)


//unit pln
routes.get('/api/unitpln', UnitPlnController.getUnitsPln)
routes.post('/api/unitpln/create', UnitPlnController.createUnitpln)
routes.get('/api/unitpln/:id', UnitPlnController.getUnitPlnById)
routes.put('/api/unitpln/update/:id', UnitPlnController.updateUnitPln)
routes.delete('/api/unitpln/:id', UnitPlnController.deleteUnitPln)

//peserta pensiun
routes.post('/api/pesertapensiun/create', PesertaPensiunController.createPesertaPensiun)
routes.get('/api/pesertapensiun', PesertaPensiunController.getPesertaPensiun)
routes.get('/api/pesertapensiun/:id', PesertaPensiunController.getPesertaPensiunById)
routes.put('/api/pesertapensiun/update/:id', PesertaPensiunController.updatePesertaPensiun)
routes.delete('/api/pesertapensiun/:id', PesertaPensiunController.deletePesertaPensiun)

//tanggungan
routes.post('/api/tanggungan/create', TanggunganController.createTanggungan)

//registrasi ulang

module.exports = routes