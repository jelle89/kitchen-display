import {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [checked, setChecked] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);

    const addOrder = async () => {
        const foodArray = ['pizza', 'pasta', 'rice', 'lasagne', 'soup', 'smurgeonisauce', 'chicken', 'stamppot'];
        let item = foodArray[Math.floor(Math.random() * foodArray.length)];

        await axios.post('http://localhost:3001/orders', {
            description: item,
            status: 'open'
        });
        getOrders();
    }

    const changeStatus = async (id, status) => {
        await axios.patch(`http://localhost:3001/orders/${id}`, {
            status: status
        });
        getOrders();
    }

    const changeStatuses = (checked, status) => {
        checked.forEach((item) => {
            changeStatus(item, status);
        });
    };

    const updateCheckList = (id) => {
        let updatedList = [...checked];
        updatedList.splice(checked.indexOf(id), 1);
        setChecked(updatedList);
    }

    const deleteOrder = async (id) => {
        // Delete order from checked list if order is deleted
        updateCheckList(id);
        await axios.delete(`http://localhost:3001/orders/${id}`);
        getOrders();
    }

    const deleteOrders = (checked) => {
        checked.forEach((item) => {
            deleteOrder(item);
        });
    };

    const getOrders = async () => {
        const response = await axios.get('http://localhost:3001/orders');
        setOrders(response.data);
    }

    const handleCheck = (event) => {
        let updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    return (
        <div>
            <h1>Kitchen Display</h1>
            <button onClick={() => addOrder()} className="generic-button orange">Add order</button>
            <table className="styled-table">
                <thead>
                <tr>
                    <th/>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                        <td>
                            <input value={order.id} type="checkbox" onChange={handleCheck}/>
                        </td>
                        <td>{order.id}</td>
                        <td>
                            <Link to={`/edit/${order.id}`} className="generic-button">{order.description}</Link>
                        </td>
                        <td>{order.status}</td>
                        <td>
                            <button onClick={() => changeStatus(order.id, 'open')}
                                    className="generic-button yellow">Open
                            </button>
                            <button onClick={() => changeStatus(order.id, 'preparing')}
                                    className="generic-button orange">Preparing
                            </button>
                            <button onClick={() => changeStatus(order.id, 'served')}
                                    className="generic-button green">Served
                            </button>
                            <button onClick={() => deleteOrder(order.id)} className="generic-button red">Delete</button>
                            <Link to={`/edit/${order.id}`} className="generic-button yellow">Edit description</Link>
                        </td>
                    </tr>
                )) }

                </tbody>
            </table>
            <div>
                <h2>Change in bulk:</h2>
                <button onClick={() => changeStatuses(checked, 'open')}
                        className="generic-button yellow">Open</button>
                <button onClick={() => changeStatuses(checked, 'preparing')}
                        className="generic-button orange">Preparing
                </button>
                <button onClick={() => changeStatuses(checked, 'served')}
                        className="generic-button green">Served
                </button>
                <button onClick={() => deleteOrders(checked)} className="generic-button red">Delete</button>
            </div>
        </div>
    )
}

export default OrderList