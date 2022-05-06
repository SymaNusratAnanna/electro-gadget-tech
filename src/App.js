

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
// import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Home/Inventory/Inventory';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
//import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Pages/Blogs/Blogs';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';


function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/inventoryitem/:inventoryId" element={<InventoryDetails></InventoryDetails>}></Route>
          <Route path="/about" element={<About></About>}></Route> 
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
     </Routes>
     <Footer></Footer>
        
    </div>
  );
}

export default App;
