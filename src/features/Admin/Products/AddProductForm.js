// import axios from "axios";
import React from "react";
// import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
// import axiosClient from "../../../api/axiosClient";
import productApi from "../../../api/productApi";
import catergoryApi from "../../../api/catergoryApi";
import { useHistory } from "react-router-dom";
function AddProductForm() {
  // const { register, handleSubmit, watch, errors } = useForm();

  const [nameProduct, setNameProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const history = useHistory();

  useEffect(() => {
    catergoryApi.getAll().then((response) => {
      setCategoryProduct(response.data);
    });
  }, []);

  const handleSubmit = async () => {
    console.log(nameProduct);

    try {
      // console.log(+priceProduct);
      await productApi.addProduct({
        name: nameProduct,
        price: +priceProduct,
        catergory: categoryProduct,
      });
      history.push("/admin/product");
      // console.log(response);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div class="row g-3">
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">
          Name
        </label>
        <input
          type="name"
          class="form-control"
          id="inputName4"
          placeholder="Name"
          name="name"
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
        />
      </div>
      <div class="col-12">
        <label for="inputPrice" class="form-label">
          Price
        </label>
        <input
          type="text"
          class="form-control"
          id="inputPrice"
          placeholder="Price"
          name="price"
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />
      </div>
      <div class="col-md-12">
        <label for="inputCatergory" class="form-label">
          Catergory
        </label>
        <select
          id="inputCatergory"
          class="form-select"
          name="catergory"
          value={categoryProduct}
          onChange={(e) => setCategoryProduct(e.target.value)}
        >
          {categoryProduct.length !== 0 &&
            categoryProduct.map((categorie, index) => (
              <option value={categorie.id} key={index}>
                {categorie.name}
              </option>
              // <option value="" select hidden></option>
            ))}
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddProductForm;
