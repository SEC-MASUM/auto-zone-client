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
import Login from "./Pages/Shared/Login/Login";
import SignUp from "./Pages/Shared/SignUp/SignUp";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Payment from "./Pages/Payment/Payment";
import Reviews from "./Pages/Reviews/Reviews";
import RequireAdmin from "./Pages/Shared/RequireAdmin/RequireAdmin";
import UpdateProfile from "./Pages/Dashboard/Profile/UpdateProfile/UpdateProfile";
import ProfileDetails from "./Pages/Dashboard/Profile/ProfileDetails/ProfileDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<ProfileDetails />} />
            <Route path="update" element={<UpdateProfile />} />
          </Route>
          <Route path="addReview" element={<AddReview />} />
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="addProducts"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="userRole"
            element={
              <RequireAdmin>
                <UserRole />
              </RequireAdmin>
            }
          />
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
