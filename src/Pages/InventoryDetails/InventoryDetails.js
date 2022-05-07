import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    return (
        <div>
            <h2>welcome to detail{inventoryId}</h2>
            <div className='text-center'>
            <Link to="/checkout">
                <button className='btn btn-primary'>Proceed check out</button>
            </Link>
        </div>
        </div>
    );
};

export default InventoryDetails;