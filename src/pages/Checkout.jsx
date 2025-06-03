import React from "react";

function Checkout(data) {


    const productAndQuant = JSON.parse(localStorage.getItem("cartProduct"));

  return (
    <div className="bg-blue-100 p-5 flex flex-col gap-5">
      <div className="bg-white p-5 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">
          Delivering to {localStorage.getItem("username")}
        </h1>
        <h1>Zameil alsaliem, 2, Onaizah, Qassiem, 56241, Saudi Arabia</h1>
      </div>
      <div className="bg-white p-5 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Paying with Visa 9814</h1>
        <h1>Use a gift card, voucher, or promo code</h1>
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center gap-4">
          <button className="bg-amber-300 p-2 rounded-3xl">
            Place your order in SAR
          </button>
          <div>
            <h1 className="text-xl font-bold">Order total: SAR {productAndQuant.product.price}</h1>
            <p>
              By placing your order, you agree to Amazon's privacy notice and
              conditions of use. You also agree to AmazonGlobal's terms and
              conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
