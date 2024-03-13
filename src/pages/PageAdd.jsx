import React from "react";
import AddProduct from "../components/product/AddProduct";
import Navbar from "../homepage/Navbar";

const PageAdd = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://yastatic.net/s3/passport-auth-customs/customs/_/2V4FB5Yu.jpg')",
        margin: 0,
      }}
    >
      <Navbar />
      <AddProduct />
    </div>
  );
};

export default PageAdd;
