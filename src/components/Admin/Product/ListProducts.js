import React, { useEffect, useState } from "react";
import axios from "axios";

const ListProducts = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    axios.get(" http://localhost:8000/products").then((response) => {
      setListProduct(response.data);
    });
  }, []);

  return (
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
  );
};

export default ListProducts;
