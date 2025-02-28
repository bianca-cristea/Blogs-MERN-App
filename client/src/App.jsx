import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import AllBlogs from "./pages/All Blogs/AllBlogs";
import DashboardProfile from "./components/Profile/DashboardProfile";
import Favourites from "./components/Profile/Favourites";
import LikedBlogs from "./components/Profile/LikedBlogs";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<DashboardProfile />} />
            <Route path="/profile/favourites" element={<Favourites />} />
            <Route path="/profile/liked-blogs" element={<LikedBlogs />} />
          </Route>
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
