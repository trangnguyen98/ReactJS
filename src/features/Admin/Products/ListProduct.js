import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

// import axiosClient from "../../../api/axiosClient";
import productApi from "../../../api/productApi";

const ListProduct = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    productApi.getAll().then((response) => {
      setListProduct(response.data);
    });
  }, []);

  const history = useHistory();
  const handleDelete = async (id) => {
    try {
      await productApi.deleteProduct(id);
      history.go(0);
    } catch (error) {}
  };

  return (
    <div>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Products</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <NavLink to="/admin/product/add">Add product</NavLink>
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.length !== 0 &&
            listProduct.map((product, index) => (
              <>
                <tr>
                  <td>{product.id}</td>
                  <td>
                    <img style={{ width: "50px" }} src={product.img}></img>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.catergory}</td>
                  <td>{product.price}</td>
                  <td>
                    <div class="d-grid gap-2 d-md-block">
                      <button type="button" class="btn btn-primary">
                        <Link to={`/admin/product/edit/${product.id}`}>
                          Edit
                        </Link>
                      </button>

                      <button
                        onClick={() => handleDelete(product.id)}
                        style={{ marginRight: "5px" }}
                        type="button"
                        class="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
      {/* <Route></Route> */}
      {/* <AddProductForm onAdd={}/> */}
    </div>
  );
};

export default ListProduct;
