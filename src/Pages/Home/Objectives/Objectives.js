import React from "react";
import './Objectives.css'
import image from '../../../images/about/goal.jpg';

const Objectives = () => {
  return (
    <div className="intro-container">
      <div className='headline'>
        <h2>Our goal and Objectives</h2>
        <p>
          Our objective is to Reduce our clients overall Logistics Cost and
          Increase their Customer Order Servicability.
        </p>
        <p>
          Well established and highly regarded in the electronics market. A
          dedicated group of engineers working to give the highest quality.
          Efficient production methods WEAKNESSES Building new relations with
          suppliers. The target group can choose cheaper models if they want.
          Low debt equity rating. Lower risk.
        </p>
      </div>
      <div>
      <div className='img'>
            <img
        className="d-block w-100"
        src={image}
        alt=""
      />
      </div>
      </div>
    </div>
  );
};

export default Objectives;
