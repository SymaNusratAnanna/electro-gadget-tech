import React from "react";
import image from '../../images/notfound/notfound.jpg';
const Notfound = () => {
  return (
    <div>
      <h2 className="text-primary text-center"> Opps Page Not Found!!!</h2>
      <img className="align-items-center w-100 " src={image} alt=""/>
    </div>
  );
};

export default Notfound;
