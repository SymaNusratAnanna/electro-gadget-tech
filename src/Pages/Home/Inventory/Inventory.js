import React, { useEffect, useState } from 'react';
import './Inventory.css';

import Inventoryitem from '../Inventory/Inventoryitem/Inventoryitem'

const Inventory = () => {
    const [inventory,setInventory]= useState([]);
    useEffect(()=>{
        // fetch data

        fetch('https://stormy-bastion-00241.herokuapp.com/inventoryitem')
        .then(res=>res.json())
        .then(data=>setInventory(data));
    },[])
    return (
        <div className='container'>
            <h2 className='inventory-title mt-5'>Inventory</h2>

            <div className='inventory-container'>
                {/* map */}
            {
               inventory.map(inventoryitem => <Inventoryitem
               key={inventoryitem._id}
               inventoryitem={inventoryitem}>

               </Inventoryitem>
                   ) 
            }</div>
        </div>
    );
};

export default Inventory;