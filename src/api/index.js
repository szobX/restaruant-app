import { Router } from 'express';

import Logger from '../logger.js';

import MenuRoutes from './routes/menu.js';
// const mainRouter = Router();

// const MenuRoutes = require('./routes/menu.js');

export default function initRouter(app) {
    Logger.info('--> ROUTER INIT <---');

    // app.use('/api/menus', MenuRoutes);
    // const app = mainRout
    app.get('/api/', (req, res) => {
        return res.send({ message: 'server running' });
    });
    MenuRoutes(app);
}
