import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inventoryitem.css";

const Inventoryitem = ({ inventoryitem }) => {
  const { id, name, img, description, price, quantity, supplier_name } =
    inventoryitem;
    const navigate = useNavigate();
  const navigateToInventoryDetail = id => {
      navigate(`/inventoryitem/${id}`)
  };
  return (
    <div className="inventoryitem">
      <img src={img} alt="" />
      <h2>this is inventory :{name}</h2>
      <p>Price: {price}</p>
      <p>Quantity:{quantity}</p>
      <p>Supplier-name:{supplier_name}</p>

      <p>
        <small>{description}</small>
      </p>

      <button
        onClick={navigateToInventoryDetail(id)}
        className="btn btn-primary"
      >
        Manage
      </button>
    </div>
  );
};

export default Inventoryitem;
