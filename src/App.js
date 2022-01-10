// import logo from './logo.svg';
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Search from "./components/search/search";
import Content from "./components/content/content";
import "./App.css";
import Shop from "./components/shop/shop";
import Magazine from "./components/manazine/manazine";
import LayoutAdmin from "./components/layoutAdmin/LayoutAdmin";
import AddProductForm from "./components/Admin/Product/AddProductForm";
import ListProducts from "./components/Admin/Product/ListProducts";
function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/admin/:path?">
            <LayoutAdmin>
              <Route exact path="/admin/product">
                <ListProducts />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProductForm />
              </Route>
            </LayoutAdmin>
          </Route>
          <Route path="/" exact>
            <Header />
            <Search />
            <Content />
          </Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/magazine" exact>
            <Magazine />
          </Route>
          <Route>
            <LayoutAdmin path="/admin"></LayoutAdmin>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
