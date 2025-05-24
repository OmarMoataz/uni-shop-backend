import { Request, Response } from 'express';
import { getAllCategories } from '../services/categoriesService';

const categoriesController = {
    get: async (req: Request, res: Response): Promise<void> => {
      const data = await getAllCategories();
      res.json(data);
    }
  };


export default categoriesController;

  