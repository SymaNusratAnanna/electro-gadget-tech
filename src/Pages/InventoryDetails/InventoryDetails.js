import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const InventoryDetails = () => {
  const { inventoryitemId } = useParams();
  const [inventoryitem, setInventoryitem] = useState({});
  const { register, handleSubmit } = useForm();
  const { _id, name, img, description, price, quantity, supplier_name } =
    inventoryitem;
  const navigate = useNavigate();
  const navigateToInventoryDetail = (id) => {
    navigate(`/inventoryitem/${id}`);
  };

  useEffect(() => {
    const url = `https://stormy-bastion-00241.herokuapp.com/inventoryitem/${inventoryitemId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryitem(data));
  }, []);
  return (
<div>
     <div className="text-center">
     <h2>Details about: {inventoryitem.name}</h2>
     </div>

    <div
      class="card mt-10 g-5 my-5 mx-5 justify-content-center"
      style={{ width: "21rem" }}
    >
      <div>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{inventoryitem.name}</h3>

          <h4 class="card-text">Price : {inventoryitem.price}</h4>
          <p class="card-text">Quantity:{inventoryitem.quantity}</p>
          <p class="card-text">Supplier-name:{inventoryitem.supplier_name}</p>
          <p class="card-text">{inventoryitem.description}</p>

          {/* set button */}
            
            <button
              onClick={() => navigateToInventoryDetail(_id)}
              className="btn btn-primary"
            >
              Deliver
            </button>
        
        
        </div>
      </div>
    </div>
    <div className='w-50 mx-auto text-center mt-10'>
                   <h2>Restock-Inventory</h2>
<input className='mb-2'placeholder=' Restock-Quantity' type="number" {...register("quantity")} />
</div>
    </div>
  );
};

export default InventoryDetails;
