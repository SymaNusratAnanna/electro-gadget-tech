import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Inventoryitem.css";

const Inventoryitem = ({ inventoryitem, deleteHide }) => {

  const { _id, name, img, description, price, quantity, supplier_name } =
    inventoryitem;
    const [inventory, setInventory] = useState({});
  useEffect(() => {
    // fetch data

    fetch("https://stormy-bastion-00241.herokuapp.com/inventoryitem")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory]);
  const navigate = useNavigate();
  const navigateToInventoryDetail = (id) => {
    navigate(`/inventoryitem/${id}`);
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://stormy-bastion-00241.herokuapp.com/inventoryitem/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = inventory.filter((inventoryitem) => inventoryitem._id !== id);
            setInventory(remaining);
            
          }
          toast("delete successfull please reload to see update in UI");
        });
    }
  };
  
  return (
    <div
      class="card mt-10 g-5 my-5 mx-5 col-sm-12 col-md-6 col-lg-4"
      style={{ width: "18rem" }}
    >
      <div>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{name}</h3>

          <h4 class="card-text">Price : {price}</h4>
          <p class="card-text">Quantity:{quantity}</p>
          <p class="card-text">Supplier-name:{supplier_name}</p>
          <p class="card-text">{description}</p>

          <div className="d-flex justify-content-between">
            {deleteHide !== undefined ? (
              <>
                <div>
                  <button
                    onClick={() => navigateToInventoryDetail(_id)}
                    className="btn btn-primary mx-2"
                  >
                    Manage
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <button
                    onClick={() => navigateToInventoryDetail(_id)}
                    className="btn btn-primary mx-2"
                  >
                    Manage
                  </button>
                </div>

                <div>
                  <button onClick={() => handleDelete(_id)}  className="btn btn-primary "> Delete</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventoryitem;
