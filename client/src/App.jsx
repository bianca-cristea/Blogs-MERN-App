import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import OtherLayout from "./layouts/OtherLayout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Description from "./pages/Description/Description";
import Profile from "./pages/Profile/Profile";
import AllBlogs from "./pages/All Blogs/AllBlogs";
import AddBlogs from "./components/Admin Components/AddBlogs";
import EditBlogs from "./components/Admin Components/EditBlogs";
import DashboardProfile from "./components/Profile/DashboardProfile";
import Favourites from "./components/Profile/Favourites";
import LikedBlogs from "./components/Profile/LikedBlogs";
import Categories from "./pages/Categories/Categories";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import AdminSignup from "./pages/AdminSignup/AdminSignup";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminDashboardComp from "./components/Admin Components/AdminDashboardComp";
import UpdateBlog from "./components/Admin Components/Compo/UpdateBlog";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/cat/:id" element={<Categories />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<DashboardProfile />} />
            <Route path="/profile/favourites" element={<Favourites />} />
            <Route path="/profile/liked-blogs" element={<LikedBlogs />} />
          </Route>
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route index element={<AdminDashboardComp />} />
            <Route path="add-blogs" element={<AddBlogs />} />
            <Route path="edit-blogs" element={<EditBlogs />} />
            <Route path="update-blog/:id" element={<UpdateBlog />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
