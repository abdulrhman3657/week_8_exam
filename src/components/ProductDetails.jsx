import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router";
import Swal from "sweetalert2";

function ProductDetails() {
  const API = "https://fakestoreapi.com/products";

  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [rate, setRate] = useState("");
  // const [count, setCount] = useState("");

  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    axios.get(`${API}/${id}`).then((res) => {
      setRate(res.data.rating.rate);
      // setCount(res.data.rating.count);
      setProduct(res.data);
    });
  }, []);

  //   title = {product.title}
  // price = {product.price}
  // description = {product.description}
  // category = {product.category}
  // image = {product.image}

  // rating = {product.rating.rate}
  // count = {product.rating.count}

  const addToCart = () => {
    if (quantity == "" || quantity == "Quantity") {
      Swal.fire({
        icon: "error",
        title: "invalid quantity",
      });
      return;
    }

    //     var testObject = { 'one': 1, 'two': 2, 'three': 3 };
    // // Put the object into storage
    // localStorage.setItem('testObject', JSON.stringify(testObject));
    // // Retrieve the object from storage
    // var retrievedObject = localStorage.getItem('testObject');
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
    
      Swal.fire({
        icon: "success",
        title: "added to cart successfully",
      });

    localStorage.setItem('cartProduct', JSON.stringify({product: product, quantity: quantity}));

    console.log(JSON.parse(localStorage.getItem('cartProduct')));

  };

  return (
    <div className="p-4">
      <div className="flex gap-5 items-center">
        <img className="w-100 h-100" src={product.image} alt="" />
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <h1>{product.description}</h1>
          <h1>{product.category}</h1>
          <h1 className="font-black text-xl">${product.price}</h1>
          {/* <h1>Rating: {rate}</h1>
          <h1>Count: {count}</h1> */}
          <select
            onChange={(e) => setQuantity(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
          >
            <option selected>Quantity</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          <button
            onClick={addToCart}
            className="text-black bg-amber-300 w-45 h-9 rounded-2xl hover:cursor-pointer"
          >
            Add to Cart
          </button>
          <button className="text-black bg-amber-500 w-45 h-9 rounded-2xl hover:cursor-pointer">
            By Now
          </button>
          <Link className="text-indigo-600 font-bold" to={"/"}>
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
