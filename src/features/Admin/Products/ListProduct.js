import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

const ListProduct = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:8000/products").then((response) => {
      setListProduct(response.data);
    });
  }, []);

  return (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Products</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              {/* <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Share
                    </button> */}
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to="admin/product/add">Add product</Link>
              </button>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              <span data-feather="calendar" />
              This week
            </button>
          </div>
        </div>

        <div className="table-responsive">{/* <ListProduct /> */}</div>
      </main>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.length !== 0 &&
            listProduct.map((product) => (
              <>
                <tr>
                  <td>{product.id}</td>
                  <td>
                    <img style={{ width: "50px" }} src={product.img}></img>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.catergory}</td>
                  <td>{product.price}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
      <Route></Route>
    </div>
  );
};

export default ListProduct;
