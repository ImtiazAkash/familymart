import React from "react";
import Class from "../../styles/ProductPage.module.css";
import image from "../../assests/images/fridge.jpg";

function ProductPage() {
  return (
    <div className={Class.container}>
      <div className={Class.product}>
        <div className={Class.productImage}>
          <img src={image} alt="" />
        </div>

        <div className={Class.productName}>
          <div className={Class.header}>
            <h2>Title asdfgagfd gasdftg aagasdfg</h2>
            <span>
              <strong>Category</strong>: Electronics | <strong>Brand</strong>:
              Walton
            </span>
          </div>
          <div className={Class.specification}>
            <h5>
              <strong>Specifications</strong>
            </h5>
            <table>
              <tr>
                <td>
                  <strong>Brand:</strong>
                </td>
                <td>jekono ekta naam</td>
              </tr>
              <tr>
                <td>
                  <strong>Product Type:</strong>
                </td>
                <td>jekono ekta naam</td>
              </tr>
              <tr>
                <td>
                  <strong>Weight:</strong>
                </td>
                <td>jekono ekta naam</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className={Class.bottom}>
        <div className={Class.description}>
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dolorem beatae doloremque adipisci aliquam veniam non iure eum
            consectetur magni harum doloribus. Cumque similique inventore eos id
            laborum. Quod, autem.
          </p>
        </div>

        <div className={Class.cart}>
          <span>Price: 30TK</span>
          <span>Location: Block-A, Lane-4, Mirpur-6</span>
          <span>Stock: 3</span>
          <span>Shipping Cost: 50TK</span>
          <hr />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
