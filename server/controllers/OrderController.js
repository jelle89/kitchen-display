import OrderService from "../services/OrderService.js"

export const createOrder = async (req, res) => {
    try {
        await OrderService.Create(req);
        res.json({
            "message": "Order created"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteOrder = async (req, res) => {
    try {
        await OrderService.Delete(req);
        res.json({
            "message": "Order deleted"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.FindAll();
        res.json(orders);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getOrderById = async (req, res) => {
    try {
        const order = await OrderService.FindById(req);
        res.json(order[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateOrder = async (req, res) => {
    const order = await OrderService.FindById(req);

    if (req.body.status === 'served' && order[0].status === req.body.status) {
        res.json({"message": "Order is already served"});
    } else {
        try {
            await OrderService.Update(req);
            res.json({
                "message": "Status updated"
            });
        } catch (error) {
            res.json({message: error.message});
        }
    }
}



