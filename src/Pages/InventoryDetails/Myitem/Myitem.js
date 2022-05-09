import React, { useEffect, useState } from 'react';
import Inventoryitem from '../../Home/Inventory/Inventoryitem/Inventoryitem';

const Myitem = () => {
    const [inventory,setInventory]= useState([]);
    useEffect(()=>{
        // fetch data

        fetch('https://stormy-bastion-00241.herokuapp.com/inventoryitem')
        .then(res=>res.json())
        .then(data=>setInventory(data));
    },[])
    return (
        <div>
           <h2 className='text-center my-3'>My item</h2> 
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

export default Myitem;