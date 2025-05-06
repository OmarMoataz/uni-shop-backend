import express from 'express';
import productsController from '../controllers/productsController';
const router = express.Router();



router.get("/", productsController.get);

module.exports = router;