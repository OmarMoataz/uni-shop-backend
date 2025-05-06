import { Request, Response } from 'express';
import { getAllProducts } from '../services/productsService';

const productsController = {
    get: async (req: Request, res: Response) => {
      const data = await getAllProducts();
      res.json(data);
    },
  };
  
export default productsController;
  