import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { set, useForm } from "react-hook-form";

const InventoryDetails = () => {
  const { inventoryitemId } = useParams();
  const [inventoryitem, setInventoryitem] = useState({});
  
  const navigate = useNavigate();
  const navigateToInventory = () => {
    navigate(`/inventory`);
  };
  // const { _id, name, img, description, price, quantity, supplier_name } =
  //   inventoryitem;
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    // fetch data

    fetch("https://stormy-bastion-00241.herokuapp.com/inventoryitem")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory]);

  useEffect(() => {
    const url = `https://stormy-bastion-00241.herokuapp.com/inventoryitem/${inventoryitemId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryitem(data));
  }, [inventoryitemId, inventory]);
  const handleDelivered = (item) => {
    const newQuantity = parseInt(item.quantity) - 1;

    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      img: item.img,
      supplier_name: item.supplier_name,
      quantity: newQuantity,
    };

    const url = `https://stormy-bastion-00241.herokuapp.com/inventoryitem/${inventoryitemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
      });

    
  };
  const stockIncrease = (item, number) => {
    const newQuantity = parseInt(item.quantity) + parseInt(number);

    const newItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      img: item.img,
      supplier_name: item.supplier_name,
      quantity: newQuantity,
    };

    const url = `https://stormy-bastion-00241.herokuapp.com/inventoryitem/${inventoryitemId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
      });
  };

  const handleRestock = (event) => {
    event.preventDefault();
    const number = parseInt(event.target.number.value);
    stockIncrease(inventoryitem, number);
    event.target.reset();
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="text-center">{inventoryitem.name}</h2>
      </div>

      <div
        class="card mt-10 g-5 my-5 mx-5 mx-auto justify-content-center"
        style={{ width: "21rem" }}
      >
        <div>
          <img src={inventoryitem.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{inventoryitem.name}</h3>

            <h4 class="card-text">Price : {inventoryitem.price}</h4>
            <p class="card-text">Quantity:{inventoryitem.quantity}</p>
            <p class="card-text">Supplier-name:{inventoryitem.supplier_name}</p>
            <p class="card-text">{inventoryitem.description}</p>

            {/* set button */}

            <div>
              {parseInt(inventoryitem.quantity) <= 0 ? (
                <>
                  <button disabled className="btn btn-danger">
                    Sold Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleDelivered(inventoryitem)}
                    className="btn btn-primary"
                  >
                    Deliver
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-50 mx-auto text-center mt-10">
        <h2>Restock-Inventory</h2>
        <form onSubmit={handleRestock}>
          <input
            className="mb-2"
            placeholder=" Restock-Quantity"
            type="number"
            name = "number"
          />
          <input
            className="d-block mx-auto btn btn-primary"
            type="submit"
            required
            value="Restock"
          />
        </form>
      </div>
      <button onClick={navigateToInventory} className="d-block mx-auto btn btn-primary mt-5">Manage Inventory</button>
    </div>
  );
};

export default InventoryDetails;
