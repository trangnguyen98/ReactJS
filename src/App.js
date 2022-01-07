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
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
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
