import express from 'express';
import productsController from '../controllers/productsController';
const router = express.Router();

router.get("/", productsController.get);
router.get("/search", productsController.search);
router.get("/:id", productsController.getById);

export default router;