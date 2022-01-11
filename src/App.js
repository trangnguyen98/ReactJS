import "antd/dist/antd.css";
import "./App.css";
import Routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import ListProduct from "./features/Admin/Products/ListProduct";
import LayoutAdmin from "./layout/LayoutAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
