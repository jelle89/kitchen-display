import express from "express";

import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getOrderById,
    updateOrder
} from "../controllers/OrderController.js";

const router = express.Router();

router.post('/', createOrder);
router.delete('/:id', deleteOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.patch('/:id', updateOrder);

export default router;