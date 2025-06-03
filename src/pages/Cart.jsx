import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";

function Cart() {
  // productAndQuant.quantity
  const [qunatity, setQuantity] = useState(0);

  const navigate = useNavigate();

  const refresh = () => {
    navigate("/cart");
  };

  const productAndQuant = JSON.parse(localStorage.getItem("cartProduct"));

  if (!productAndQuant) {
    return (
      <div className="bg-blue-200 p-4">
        <div className="bg-white p-3">
          <h1 className="text-3xl font-bold">No items in the Cart</h1>
        </div>
      </div>
    );
  }

  console.log(productAndQuant.product);

  if (qunatity == 0) {
    setQuantity(productAndQuant.quantity);
  }

  //     {
  //     "id": 3,
  //     "title": "Mens Cotton Jacket",
  //     "price": 55.99,
  //     "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     "rating": {
  //         "rate": 4.7,
  //         "count": 500
  //     }
  // }

  const deleteProduct = () => {
    localStorage.removeItem("cartProduct");
    refresh();
  };

  return productAndQuant ? (
    <div className="bg-blue-200 p-4">
      <div className="flex flex-col gap-5 p-3 bg-white">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <hr />
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <img
            className="w-50 h-50"
            src={productAndQuant.product.image}
            alt=""
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold">
              {productAndQuant.product.title}
            </h1>
            <h1>${productAndQuant.product.price}</h1>

            <div className="flex gap-3">
              <div className="flex gap-2 items-center border-3 border-amber-500 bo justify-center w-20 rounded-xl">
                <IoAddOutline
                  onClick={() => setQuantity((prev) => Number(prev) + 1)}
                  className="text-2xl hover:cursor-pointer"
                />
                <h1
                  value={qunatity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {qunatity}
                </h1>
                <RiSubtractFill
                  onClick={() => setQuantity((prev) => Number(prev) - 1)}
                  className="text-2xl hover:cursor-pointer"
                />
              </div>

              <button onClick={deleteProduct} className="hover:font-bold">
                Delete
              </button>
            </div>

            <h1 className="text-xl">
              Subtotal ({qunatity} items): $
              {productAndQuant.product.price * qunatity}
            </h1>

            <Link to={"/checkout"} className="text-black bg-amber-300 w-45 p-3 rounded-2xl hover:cursor-pointer">
              Procceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>no</div>
  );
}

export default Cart;
