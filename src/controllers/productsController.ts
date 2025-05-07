import { Request, Response } from 'express';
import { getAllProducts, getProductById, searchProducts } from '../services/productsService';

const productsController = {
    get: async (req: Request, res: Response): Promise<void> => {
      const data = await getAllProducts();
      res.json(data);
    },
    getById: async (req: Request, res: Response): Promise<void> => {
      const { id } = req.params;
      if (id && !isNaN(parseInt(id))) {
        const data = await getProductById(parseInt(id));
        res.json(data);
      } else {
        res.status(400).json({ error: 'Product ID is required' });
      }
      
    },
    search: async (req: Request, res: Response): Promise<void> => {
      const { query } = req.query;
      
      if (!query) {
        res.status(400).json({ error: 'Search query is required' });
        return;
      }

      try {
        const results = await searchProducts(query as string);
        res.json(results);
      } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: 'Failed to search products' });
      }
    },
  };
  
export default productsController;
  