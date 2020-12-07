import express from 'express';
import PageMain from './controllers/PageMain';

const routes = express.Router();
const pageMain = new PageMain();


routes.post('/', pageMain.create); 

export default routes;