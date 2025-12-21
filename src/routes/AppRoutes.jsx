import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage";
import About from "../pages/AboutPage";
import Donation from "../pages/DonationPage";
import Contact from "../pages/ContactPage";
import Page1 from "../components/PagePage/Page1";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import Error from "../pages/Error";
import BlogPage from "../pages/BlogPage";
import Donation2 from "../pages/Donation2";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home-2" element={<Home />} />
        <Route path="/home-3" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/donation/content" element={<Donation2 />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page1 />} />
        <Route path="/page-3" element={<Page1 />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
