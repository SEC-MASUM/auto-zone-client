import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Products from "./Pages/Products/Products";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Dashboard/Profile/Profile";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import UserRole from "./Pages/Dashboard/UserRole/UserRole";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyOrders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="manageOrders" element={<ManageOrders />} />
          <Route path="addProducts" element={<AddProduct />} />
          <Route path="userRole" element={<UserRole />} />
          <Route path="manageProducts" element={<ManageProducts />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
