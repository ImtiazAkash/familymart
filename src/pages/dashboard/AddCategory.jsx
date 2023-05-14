import React, { useEffect, useState } from "react";
import Class from "../../styles/AddCategory.module.css";
import { MdCloudUpload } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import axios from 'axios'

function AddCategory() {
  const [image, setImage] = useState();
  const [category, setCategory] = useState();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);

  console.log(category);

  return (
    <div className={Class.container}>
      <div className={Class.formTitle}>Add Categories</div>
      <form action="">
        <div className={Class.input}>
          <label htmlFor="">Category Name</label>
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

        <input type="submit" value="Add Category" />
      </form>

      <div className={Class.categoryTable}>
        <table>
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Edit</th>
          </tr>
          {category &&
            category.map((val, index) => {
              return (
                <tr>
                  <td>1</td>
                  <td>{val}</td>
                  <td>
                    <FaEdit />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default AddCategory;
