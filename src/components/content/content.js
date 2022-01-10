import React, { useState, useEffect } from "react";
import "./content.css";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

// const products = [
//   {
//     id: 1,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp1.png",
//     rating: 0,
//   },
//   {
//     id: 2,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp2.png",
//     rating: 0,
//   },
//   {
//     id: 3,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp3.png",
//     rating: 0,
//   },
//   {
//     id: 4,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp4.png",
//     rating: 0,
//   },
//   {
//     id: 5,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp5.png",
//     rating: 0,
//   },
//   {
//     id: 6,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp6.png",
//     rating: 0,
//   },
//   {
//     id: 7,
//     name: "ban2",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp1.png",
//     rating: 0,
//   },
//   {
//     id: 8,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp1.png",
//     rating: 0,
//   },
//   {
//     id: 9,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp1.png",
//     rating: 0,
//   },
//   {
//     id: 10,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp1.png",
//     rating: 0,
//   },
//   {
//     id: 11,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp1.png",
//     rating: 0,
//   },
//   {
//     id: 12,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp1.png",
//     rating: 0,
//   },
//   {
//     id: 13,
//     name: "ghg",
//     catergory: "ban ghe",
//     price: 89,
//     img: "./img/sp1.png",
//     rating: 0,
//   },
// ];

function Content() {
  const [listProduct, setListProduct] = useState([]); //Product all
  const [productPage, setProductPage] = useState([]); //product of page
  //hàm callback
  // console.log("test");
  useEffect(() => {
    axios.get(" http://localhost:8000/products").then((response) => {
      // console.log(response.data);
      //setListProduct là promise (bất đồng bộ) nên chưa listProduct vẫn là mảng rỗng. sau đó sẽ chạy useEffect dưới
      setListProduct(response.data);
    });
  }, []);

  const productOnePage = (page) => {
    const index = (page - 1) * 6; // tính vị trí bắt đầu 12
    const number = index + 6; // vị trí kết thúc 18
    const newProduct = [];
    if (number <= listProduct.length) {
      for (let i = index; i < number; i++) {
        newProduct.push(listProduct[i]);
      }
    } else {
      // 12          12
      for (let i = index; i < listProduct.length; i++) {
        newProduct.push(listProduct[i]);
      }
    }
    setProductPage(newProduct);
  };

  // lần render đầu tiên
  useEffect(() => {
    productOnePage(1);
  }, [listProduct]);

  return (
    <div className="row content mt-40">
      <div className="col-12 col-sm-12 col-md-12 col-lg-3  list-menu">
        Filter by
        {/* <ul>Filter by</ul> */}
        <div class="list-group">
          <select
            class="form-select list-filter"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            class="form-select list-filter"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            class="form-select list-filter"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            class="form-select list-filter"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-9 menu-select">
        {/* <div className="container"> */}
        <div className="row">
          {productPage.length !== 0 &&
            productPage.map((product) => (
              <>
                <div key={product.id} className="col-sm-4 product-list">
                  <img src={product.img}></img>
                  <div className="product">
                    <div className="d-flex justify-content-between product-infor">
                      <ul className="product-infor__price">
                        <li>{product.name}</li>
                        <li>{product.catergory}</li>
                      </ul>
                      <span>{product.price}</span>
                    </div>
                    <div className="product-action">
                      <span className="product-action__rating">
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                        <i className="ti-star"></i>
                      </span>
                      <span className="product-action__order">
                        <i className="ti-shopping-cart-full icon-order"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
      <Pagination onPageChange={productOnePage} />
    </div>
  );
}

export default Content;
