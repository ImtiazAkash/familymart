import React from "react";
import Class from "../../styles/ProductGrid.module.css";
import image from "../../assests/images/fridge.jpg";
import { MdSearch } from "react-icons/md";
import Card from "../../components/Card";

function ProductGrid() {
  return (
    <div className={Class.container}>
      <div className={Class["search-container"]}>
        <form action="">
          <div className={Class.search}>
            <input
              className={Class["search-input"]}
              type="text"
              placeholder="Search here"
              name="search"
            />
            <button className={Class["search-button"]} type="submit">
              <MdSearch />
            </button>
          </div>

          <div className={Class.sort}>
            <select name="" id="">
              <option value="">Category</option>
            </select>
            <select name="" id="">
              <option value="">By Date</option>
            </select>
          </div>
        </form>
      </div>
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
  );
}

export default ProductGrid;
