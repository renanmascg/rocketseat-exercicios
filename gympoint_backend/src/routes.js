import { Router } from 'express';

import SessionController from './app/controllers/SessionCrontroller';

const routes = new Router();

routes.post('/sessions', SessionController.store);

export default routes;
