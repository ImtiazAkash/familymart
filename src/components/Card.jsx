import React from "react";
import Class from "../styles/Card.module.css";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

function Card({ image, productName, productPrice }) {
  return (
    // <div className={Class.card}>
    //     <img src={image} alt="Card" />
    //     <div className={Class.productName}>
    //       <span>{productName}</span>
    //     </div>
    //     <div className={Class.productPrice}>
    //       <span>{productPrice}</span>
    //     </div>

    //     <div className={Class.buttons}>
    //       <button className={Class.edit}>
    //         <HiPencil />
    //         Edit
    //       </button>
    //       <button className={Class.delete}>
    //         <MdDelete />
    //         Delete
    //       </button>
    //     </div>
    //   </div>

    <div className={Class.card}>
      <img src={image} alt="" />
      <div className={Class.container}>
        <b>{productName}</b>

        <p>{productPrice}</p>
      </div>
      <div className={Class.actions}>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}

export default Card;
