import { Request, Response } from 'express';

const getLastNotification = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};
const getNotification = (req: Request, res: Response) => {
  res.status(200).json({ message: 'getfromID' });
};
const addNotification = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const controller = {
  getLastNotification,
  getNotification,
  addNotification
};

export default controller;
