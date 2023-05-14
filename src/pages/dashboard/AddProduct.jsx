import React, { useState } from "react";
import Class from "../../styles/AddProduct.module.css";
import { MdCloudUpload } from "react-icons/md";

function AddProduct() {
  const [image, setImage] = useState();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className={Class.container}>
      <div className={Class.formTitle}>Add Product</div>
      <form action="">
        <div className={Class.input}>
          <label htmlFor="">Product title</label>
          <input type="text" placeholder="Enter Name" />
        </div>

        <div className={Class.input}>
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Write Description"
          />
        </div>

        <div className={`${Class.input} ${Class.uploadImg}`}>
          <label className={Class.uploadlbl} htmlFor="img">
            <MdCloudUpload />
            Upload
          </label>
          <input
            type="file"
            id="img"
            accept="image/*"
            onChange={onImageChange}
          />
          {image && <img src={image} alt="preview" width={80} height={80} />}
        </div>

        <div className={Class.input}>
          <label htmlFor="">Category</label>
          <select name="Category" id="category">
            <option value="Clothes">Clothes</option>
          </select>
        </div>

        <div className={Class.input}>
          <label htmlFor="">Stock</label>
          <input type="number"/>
        </div>

        <div className={Class.input}>
          <label htmlFor="">Discount(%)</label>
          <input type="number" min="1" max="100"/>
        </div>

        <div className={Class.input}>
          <label htmlFor="">Price</label>
          <input type="number" step="0.01" />
        </div>

        <input className={Class.input} type="submit" value="Add Product"/>
      </form>
    </div>
  );
}

export default AddProduct;
