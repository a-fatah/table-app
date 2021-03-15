import React from "react";

import CustomerInfo from "./CustomerInfo";
import Clock from "./Clock";
import OrderDetails from "./OrderDetails";
export default function OrderForm() {
  return (
    <div>
      <h1 className="text-center">Order Form</h1>
      <CustomerInfo />
      <OrderDetails />
    </div>
  );
}
