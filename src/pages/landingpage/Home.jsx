import React from "react";
import Class from "../../styles/Home.module.css";
import Card from "../../components/Card";
import image from "../../assests/images/fridge.jpg";
import Carousel from "../../components/Carousel";

function Home() {
  const items = [
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"69000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"34000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"33000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"32000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"31000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"35000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"35000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"35000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"35000tk"}
    />,
    <Card
      image={image}
      productName={"smart fridge"}
      productPrice={"35000tk"}
    />,
  ];
  return (
    <div className={Class.container}>
      <div className={Class.trendingSection}>
        <h2>Trending Products</h2>
        <div className={Class.trendingProducts}>
          <Carousel products={items} />
        </div>
      </div>

      <div>Popular Products</div>

      <div>Products</div>
    </div>
  );
}

export default Home;
