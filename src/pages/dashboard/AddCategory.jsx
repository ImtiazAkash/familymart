import React, { useEffect, useState } from "react";
import Class from "../../styles/AddCategory.module.css";
import { MdCloudUpload } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { getCategory, saveCategory } from "../../services/category";
// import axios from 'axios'

function AddCategory() {
  const [image, setImage] = useState();
  const [error, setError] = useState("");
  const [category, setCategory] = useState();
  const [categoryName, setCategoryName] = useState();
  const [categoryDescription, setCategoryDescription] = useState();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const sendCategory = {
      categoryName: categoryName,
      categoryDescription: categoryDescription,
    }

    try {
      setError("");
  
      saveCategory(sendCategory)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error))
    } catch(error) {
      console.log(error);
      setError("error occured");
    }


  }
  
  function loadCategory() {
    try {
      getCategory().then((res) => {
        setCategory(res.data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadCategory()
  }, [category])

  return (
    <div className={Class.container}>
      <div className={Class.formTitle}>Add Categories</div>
      <form action="" onSubmit={handleSubmit}>
        <div className={Class.input}>
          <label htmlFor="">Category Name</label>
          <input type="text" placeholder="Enter Name" value={categoryName} onChange={(e)=> setCategoryName(e.target.value)} required/>
        </div>

        <div className={Class.input}>
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Write Description"
            value={categoryDescription}
            onChange={(e)=> setCategoryDescription(e.target.value)}
            required
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
            <th>Category Description</th>
            <th>Edit</th>
          </tr>
          {category &&
            category.map((val, index) => {
              return (
                <tr>
                  <td>{val.categoryID}</td>
                  <td>{val.categoryName}</td>
                  <td>{val.categoryDescription}</td>
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
