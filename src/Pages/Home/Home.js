import React from 'react';

import Banner from './Banner/Banner';
import Intro from './Intro/Intro';
import Inventory from './Inventory/Inventory';
import Objectives from './Objectives/Objectives';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Intro></Intro>
            <Inventory></Inventory>
            <Objectives></Objectives>
            

        </div>
    );
};

export default Home;