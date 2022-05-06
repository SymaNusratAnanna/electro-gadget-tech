import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    return (
        <div>
            <h2>welcome to detail{inventoryId}</h2>
        </div>
    );
};

export default InventoryDetails;