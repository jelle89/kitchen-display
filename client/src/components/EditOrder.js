/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const EditOrder = () => {
    const [description, setDescription] = useState('');
    const { id } = useParams();

    const updateOrder = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:3001/orders/${id}`,{
            description: description
        });
    }

    useEffect(() => {
        getOrderById();
    }, []);

    const getOrderById = async () => {
        const response = await axios.get(`http://localhost:3001/orders/${id}`);
        setDescription(response.data.description);
    }

    return (
        <div>
            <h1>Edit description</h1>
            <form onSubmit={ updateOrder }>
                <div className="field">
                    <label className="label">Description: </label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Description"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="button-1 yellow">Save</button>
                    <Link className="button-1 green" to="/">Back</Link>
                </div>
            </form>
        </div>
    )
}

export default EditOrder