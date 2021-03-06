import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
// import About from './Pages/About/About';
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Home/Inventory/Inventory";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
//import Header from './Pages/Shared/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./Pages/Blogs/Blogs";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";
import Notfound from "./Pages/Notfound/Notfound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RequireAuth from "./Pages/Login/RequiredAuth/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout";
import SocialLogin from "./Pages/Login/SocialLogin/SocialLogin";
import AddItem from "./Pages/InventoryDetails/AddItem/AddItem";
import Myitem from "./Pages/InventoryDetails/Myitem/Myitem";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      {/* set route */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventoryitem/:inventoryitemId"
          element={<InventoryDetails></InventoryDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <Myitem></Myitem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/sociallogin" element={<SocialLogin></SocialLogin>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
