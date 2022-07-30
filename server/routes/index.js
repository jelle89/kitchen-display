import express from "express";

import {
    getAllOrders,
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder
} from "../controllers/Orders.js";

const router = express.Router();

router.post('/', createOrder);
router.delete('/:id', deleteOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.patch('/:id', updateOrder);

export default router;