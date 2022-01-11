import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutAdmin from "../layout/LayoutAdmin";
import ListProduct from "../features/Admin/Products/ListProduct";
import Header from "../components/header/Header";
import Search from "../components/search/search";
import Content from "../features/Client/content/content";
import Shop from "../components/shop/shop";
import Magazine from "../components/manazine/manazine";
import AddProductForm from "../features/Admin/Products/AddProductForm";
function Routes() {
  return (
    <>
      <div className="container">
        <Switch>
          <Route path="/admin/:path?">
            {/* <Switch> */}
            <LayoutAdmin />
            {/* <Route exact path={path}></Route> */}
            <Route exact path="admin/product">
              <ListProduct />
            </Route>
            <Route exact path="admin/product/add">
              <AddProductForm />
            </Route>
            {/* </LayoutAdmin> */}
            {/* </Switch> */}
          </Route>
          <Route path="/" exact>
            <Header />
            <Search />
            <Content />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/magazine" exact>
            <Magazine />
          </Route>
          {/* <Route>
            <LayoutAdmin path="/admin"></LayoutAdmin>
          </Route> */}
        </Switch>
      </div>
    </>
  );
}

export default Routes;
