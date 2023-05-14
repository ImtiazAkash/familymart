import React from "react";
import Class from "../../styles/ProductGrid.module.css";
import { Link } from "react-router-dom";
import photo from "../../assests/images/fridge.jpg";
import { HiPencil } from "react-icons/hi";
import { MdDelete, MdSearch } from "react-icons/md";

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
        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>

        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>

        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>

        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>

        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>

        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>

        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>

        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>

        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>
        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>
        <div className={Class.card}>
          <img src={photo} alt="Card" />
          <div className={Class.productName}>
            <span>Smart Fridge</span>
          </div>
          <div className={Class.productPrice}>
            <span>350$</span>
          </div>

          <div className={Class.buttons}>
            <button className={Class.edit}>
              <HiPencil />
              Edit
            </button>
            <button className={Class.delete}>
              <MdDelete />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
