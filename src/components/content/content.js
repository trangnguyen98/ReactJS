import React, { useState, useEffect } from "react";
import "./content.css";

const products = [
  {
    id: 1,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp1.png",
    rating: 0,
  },
  {
    id: 2,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp2.png",
    rating: 0,
  },
  {
    id: 3,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp3.png",
    rating: 0,
  },
  {
    id: 4,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp4.png",
    rating: 0,
  },
  {
    id: 5,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp5.png",
    rating: 0,
  },
  {
    id: 6,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp6.png",
    rating: 0,
  },
  {
    id: 7,
    name: "ban2",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp1.png",
    rating: 0,
  },
  {
    id: 8,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp1.png",
    rating: 0,
  },
  {
    id: 9,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp1.png",
    rating: 0,
  },
  {
    id: 10,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp1.png",
    rating: 0,
  },
  {
    id: 11,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp1.png",
    rating: 0,
  },
  {
    id: 12,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp1.png",
    rating: 0,
  },
  {
    id: 13,
    name: "ghg",
    catergory: "ban ghe",
    price: 89,
    img: "./img/sp1.png",
    rating: 0,
  },
];

function Content() {
  const [listProduct, setListProduct] = useState([]);
  //hàm callback
  console.log("test");
  const productPage = (page) => {
    const index = (page - 1) * 6; // tính vị trí bắt đầu 12
    const number = index + 6; // vị trí kết thúc 18
    const newProduct = [];
    if (number <= products.length) {
      for (let i = index; i < number; i++) {
        newProduct.push(products[i]);
      }
    } else {
      // 12          12
      for (let i = index; i < products.length; i++) {
        newProduct.push(products[i]);
      }
    }
    setListProduct(newProduct);
  };
  //lần render đầu tiên
  useEffect(() => {
    productPage(1);
  }, []);
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
          {listProduct.length !== 0 &&
            listProduct.map((product) => (
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
      <div>
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center mt-40"
        >
          <ul class="pagination">
            <li class="page-item" onClick={() => productPage(1)}>
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item" onClick={() => productPage(2)}>
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item" onClick={() => productPage(3)}>
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item" onClick={() => productPage(4)}>
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                6
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                7
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                8
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                9
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                10
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Content;
