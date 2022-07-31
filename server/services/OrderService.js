import Order from "../models/OrderModel.js";

const OrderService = {
    Create: (req) => {
        return Order.create(req.body);
    },
    Delete: (req) => {
        return Order.destroy({
            where: {
                id: req.params.id
            }
        });
    },
    FindAll: () => {
        return Order.findAll();
    },
    FindById: (req) => {
        return Order.findAll({
            where: {
                id: req.params.id
            }
        });
    },
    Update: (req) => {
        return Order.update(req.body, {
            where: {
                id: req.params.id
            }
        });
    }
}

export default OrderService;