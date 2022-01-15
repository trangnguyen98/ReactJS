import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProductForm from "../features/Admin/Products/AddProductForm";
import EdditProductForm from "../features/Admin/Products/EditProductForm";
import ListProduct from "../features/Admin/Products/ListProduct";
// import LayoutAdmin from "../layout/LayoutAdmin";

function RoutesAdmin() {
  return (
    <div>
      <Switch>
        <Route exact path="/admin/product">
          <ListProduct />
        </Route>
        <Route exact path="/admin/product/add">
          <AddProductForm />
        </Route>
        <Route exact path="/admin/product/edit/:id">
          <EdditProductForm />
        </Route>
      </Switch>
    </div>
  );
}

export default RoutesAdmin;
