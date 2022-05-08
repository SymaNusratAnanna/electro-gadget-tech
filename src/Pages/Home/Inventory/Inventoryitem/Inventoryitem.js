import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inventoryitem.css";

const Inventoryitem = ({ inventoryitem }) => {
  const { _id, name, img, description, price, quantity, supplier_name } =
    inventoryitem;
    const navigate = useNavigate();
  const navigateToInventoryDetail = id => {
      navigate(`/inventoryitem/${id}`)
  };
  return (
   
<div class="card mt-10 g-5 my-5 mx-5 col-sm-12 col-md-6 col-lg-4"
         style={{width: "18rem"}}>
           <div>

  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 class="card-title">{name}</h3>
   
  
    <h4 class="card-text">Price : {price}</h4>
    <p class="card-text">Quantity:{quantity}</p>
    <p class="card-text">Supplier-name:{supplier_name}</p>
    <p class="card-text">{description}</p>
    

    <button
        onClick={()=>navigateToInventoryDetail(_id)}
        className="btn btn-primary"
      >
        Manage
       </button>

    
  </div>
  </div>
</div>


  );
};

export default Inventoryitem;
