const express = require('express');
const { celebrate, Joi, Segments, errors } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
	[Segments.BODY]: Joi.object().keys({		
		name: Joi.string().required(),		
    email: Joi.string().required().email(),
		whatsapp: Joi.string().required().min(10).max(11),
		city: Joi.string().required(),
		uf: Joi.string().required().max(2),
  }),  
}), OngController.create);

routes.get('/profile', celebrate({
	[Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown()
}), ProfileController.index);

routes.get('/incidents', celebrate({
	[Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

routes.post('/incidents', celebrate({
	[Segments.HEADERS]: Joi.object({ 
    authorization: Joi.string().required(),
	}).unknown(),
	[Segments.BODY]: Joi.object().keys({			
		title: Joi.string().required(),		
    description: Joi.string().required().email(),
		value: Joi.number().required(),		
  }), 
}), IncidentController.create);


routes.delete('/incidents/:id', celebrate({
	[Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
	}).unknown(),
	[Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);




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