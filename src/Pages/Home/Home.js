import React, { useEffect, useState } from 'react';

import Banner from './Banner/Banner';
import Intro from './Intro/Intro';
import Inventoryitem from './Inventory/Inventoryitem/Inventoryitem';
import Objectives from './Objectives/Objectives';

const Home = () => {
    const [inventory,setInventory]= useState([]);
    
    useEffect(()=>{
        // fetch data

        fetch('https://stormy-bastion-00241.herokuapp.com/inventoryitem')
        .then(res=>res.json())
        .then(data=>setInventory(data));
    },[])
    const deleteHide = 1;
    return (
        <div>
            
            <Banner></Banner>
            <Intro></Intro>
            <div>
                <h2 className='text-center my-5'>Inventory</h2>
                <div className='inventory-container'>
                    {
                        inventory.slice(0,6).map(inventoryitem => <Inventoryitem
                            key={inventoryitem._id}
                            inventoryitem={inventoryitem} deleteHide = {deleteHide}>
             
                            </Inventoryitem>
                                )
                    }
                </div>

            </div>
            <Objectives></Objectives>
            

        </div>
    );
};

export default Home;