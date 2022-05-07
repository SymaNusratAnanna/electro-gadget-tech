import React from "react";
import image from '../../images/about/about.jpeg';

const About = () => {
  return (
    <div className= ' intro-container'>
    <div className='headline'>
    <h2>We provide Quality Products for business and Consumer</h2>
    <p>
    We at Electro Gadget tech are proud to introduce you to our unique products. All of our products are Original and Authentic. We have Worlds best Company products. We can assure Best Quality products. We would like to provide you with an introductory offer on Wholesale.
    </p>
    </div>
    <div className='img'>
    <img
className="d-block w-100"
src={image}
alt="Third slide"
/>
    </div>
</div>
  );
};

export default About;
