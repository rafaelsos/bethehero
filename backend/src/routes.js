const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;


/**
 * 
  - Funcionalidades
	- Login de ONG
	- Logout de ONG
	- Cadastro de ONG - ok
	- Cadastrar novos casos
  - Deletar casos
  - Listar ONGs - ok 
	- Listar casos específicos de uma ONG
	- Listar todos os casos
	- Entrar em contato com a ONG
 */