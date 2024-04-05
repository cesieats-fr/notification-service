import { Request, Response } from 'express';

const getLastNotifcation = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};
const getNotifcation = (req: Request, res: Response) => {
  res.status(200).json({ message: 'getfromID' });
};
const addNotifcation = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const controller = {
  getLastNotifcation,
  getNotifcation,
  addNotifcation
};

export default controller;
