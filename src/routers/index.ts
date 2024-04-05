import express, { Router, Request, Response } from 'express';
import controller from './controller';

const router: Router = express.Router();

router.get('/getLast/{idUser}', controller.getLastNotifcation);

// prend deux id en parametre l'id de l'utilisateur et le type de notification
router.get('/getNotifcation', controller.getNotifcation);

router.post('/addNotifcation/{idUser}', controller.addNotifcation);

export default router;
