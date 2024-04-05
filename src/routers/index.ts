import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

router.get('/getLastNotification/{idUser}', controller.getLastNotification);

// prend deux id en parametre l'id de l'utilisateur et le type de notification
router.get('/getNotification', controller.getNotification);

router.post('/addNotification/{idUser}', controller.addNotification);

export default router;
