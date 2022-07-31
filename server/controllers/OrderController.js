import OrderService from "../services/orderService.js"

export const createOrder = async (req, res) => {
    try {
        await OrderService.Create(req);
        res.json({
            "message": "Order Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteOrder = async (req, res) => {
    try {
        await OrderService.Delete(req);
        res.json({
            "message": "Order Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.FindAll();
        res.json(orders);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getOrderById = async (req, res) => {
    try {
        const order = await OrderService.FindById(req);
        res.json(order[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateOrder = async (req, res) => {
    try {
        await OrderService.Update(req);
    } catch (error) {
        res.json({ message: error.message });
    }
}



