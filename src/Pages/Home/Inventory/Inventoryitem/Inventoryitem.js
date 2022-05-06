import React from 'react';
import './Inventoryitem.css';

const Inventoryitem = ({inventoryitem}) => {
    const {name,img,description,price,quantity,supplier_name} = inventoryitem;

    return (
        <div className='inventoryitem'>
            <img src={img} alt="" />
           <h2>this is inventory :{name}</h2> 
           <p>Price: {price}</p>
           <p>Quantity:{quantity}</p>
           <p>Supplier-name:{supplier_name}</p>

           <p><small>{description}</small></p>
           
           <button className='btn btn-primary'>Manage</button>
        </div>
    );
};

export default Inventoryitem;