import React from "react";
import { useState, useEffect } from "react";
import productApi from "../../../api/productApi";
import catergoryApi from "../../../api/catergoryApi";
import { useHistory, useParams } from "react-router-dom";

function EdditProductForm() {
  const [nameProduct, setNameProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imgProduct, setimgProduct] = useState("");
  const [listCategoryProduct, setListCategoryProduct] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  // console.log(id);

  const getDataByid = async () => {
    const { data } = await productApi.get(id);
    // console.log(data);
    if (data) {
      setNameProduct(data.name);
      setPriceProduct(data.price);
      setCategoryProduct(data.catergory);
      setimgProduct(data.img);
    }
    return data;
  };
  useEffect(() => {
    getDataByid();
    catergoryApi.getAll().then((response) => {
      setListCategoryProduct(response.data);
    });
  }, []);
  console.log(categoryProduct);
  const handleSubmit = async () => {
    try {
      // console.log(+priceProduct);
      await productApi.updateProduct({
        img: imgProduct,
        id: id,
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
    <div>
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
            {listCategoryProduct.length !== 0 &&
              listCategoryProduct.map((categorie, index) => (
                <option value={categorie.id} key={index}>
                  {categorie.name}
                </option>
                // <option value="" select hidden></option>
              ))}
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default EdditProductForm;
