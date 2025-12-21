import Navbar from "../components/MainPage/NavBar";
import Footer from "../components/MainPage/Footer";
import ContinuousImage from "../components/AboutPage/ContinuousImage";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <ContinuousImage />
      <Footer />
    </>
  );
}