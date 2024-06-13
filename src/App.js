// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./Components/ProductsPage";
import BuyPage from "./Components/BuyPage";
import CustomNav from "./Components/CustomNav";
import Welcome from "./Components/Welcome";
import CartPage from "./Components/CartPage";
import Login from "./Components/Services/Login";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNav />
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/ProductsPage" element={<ProductsPage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/buyPage/:productId" element={<BuyPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
