import React, { useEffect, useState } from "react";
import Class from "../../styles/AddProduct.module.css";
import { MdCloudUpload } from "react-icons/md";
import { getProduct, saveProduct } from "../../services/product";
import { getCategory } from "../../services/category";

function AddProduct() {
  const [category, setCategory] = useState();
  const [error, setError] = useState();
  const [product, setProduct] = useState();
  const [productName, setProductName] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImage, setProductImage] = useState();
  const [productCategory, setProductCategory] = useState();
  const [brand, setBrand] = useState();
  const [productType, setProductType] = useState();
  const [weight, setWeight] = useState();
  const [stock, setStock] = useState();
  const [discount, setDiscount] = useState();
  const [price, setPrice] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', productImage)

    const product = {
      productTitle: productName,
      description: productDescription,
      productImage: productImage,
      categoryID: productCategory,
      brand: brand,
      productType: productType,
      weight: weight,
      stock: stock,
      discount: discount,
      price: price,
    };

    console.log(product);

    try {
      setError("");

      saveProduct(product)
        .then((res) => {
          console.log(res.data);
          loadProduct();
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      setError("error occured");
    }
  }

  const loadCategory = () => {
    try {
      getCategory().then((res) => {
        setCategory(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  function loadProduct() {
    try {
      getProduct().then((res) => {
        setProduct(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadCategory();
    loadProduct();
  }, []);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className={Class.container}>
      <div className={Class.formTitle}>Add Product</div>
      <form action="" onSubmit={handleSubmit}>
        <div className={Class.formLeft}>
          <div className={Class.input}>
            <label htmlFor="">Product title</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className={Class.input}>
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              id="description"
              rows="3"
              placeholder="Write Description"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
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
              value={productImage}
              onChange={(e) => {
                onImageChange(e);
                setProductImage(e.target.value);
              }}
            />
            {productImage && (
              <img src={productImage} alt="preview" width={80} height={80} />
            )}
          </div>

          <div className={Class.input}>
            <label htmlFor="">Category</label>
            <select name="Category" id="category" value={productCategory} onChange={(e)=> setProductCategory(e.target.value)}>
              {category &&
                category.map((val, index) => {
                  return (
                    <option value={val.categoryID}>{val.categoryName}</option>
                  );
                })}
            </select>
          </div>
        </div>

        <div className={Class.formRight}>
          <div className={Class.input}>
            <label htmlFor="">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>

          <div className={Class.input}>
            <label htmlFor="">Product Type</label>
            <input
              type="text"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            />
          </div>

          <div className={Class.input}>
            <label htmlFor="">Weight</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className={Class.input}>
            <label htmlFor="">Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className={Class.input}>
            <label htmlFor="">Discount(%)</label>
            <input type="number" min="1" max="100" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
          </div>

          <div className={Class.input}>
            <label htmlFor="">Price</label>
            <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>
        </div>

        <input className={Class.input} type="submit" value="Add Product" />
      </form>
    </div>
  );
}

export default AddProduct;
