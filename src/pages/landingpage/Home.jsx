import React from "react";
import Class from "../../styles/Home.module.css";
import Card from "../../components/Card";
import image from "../../assests/images/fridge.jpg";
import Carousel from "../../components/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
      
      <div className={Class.Section}>
        <h2>Trending Products</h2>
        <div className={Class.trendingProducts}>
          <Carousel products={items}/>
        </div>
      </div>

      <div className={Class.Section}>
        <h2>Popular Products</h2>
        <div className={Class.trendingProducts}>
          <Carousel products={items} />
        </div>
      </div>

      <div className={Class.productSection}>
        <h2>All Products</h2>
        <div className={Class.cardContainer}>
          <Card
            image={image}
            productName={"Smart Fridge"}
            productPrice={"350TK"}
          />
          <Card
            image={image}
            productName={"Smart Fridge"}
            productPrice={"350TK"}
          />
          <Card
            image={image}
            productName={"Smart Fridge"}
            productPrice={"350TK"}
          />
          <Card
            image={image}
            productName={"Smart Fridge"}
            productPrice={"350TK"}
          />
          <Card
            image={image}
            productName={"Smart Fridge"}
            productPrice={"350TK"}
          />
          <Card
            image={image}
            productName={"Smart Fridge"}
            productPrice={"350TK"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
