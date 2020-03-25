const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);




module.exports = routes;


/**
 * 
  - Funcionalidades
	- Login de ONG
	- Logout de ONG
	- Cadastro de ONG - ok
	- Cadastrar novos casos
  - Deletar casos - ok
  - Listar ONGs - ok 
	- Listar casos específicos de uma ONG
	- Listar todos os casos
	- Entrar em contato com a ONG
 */