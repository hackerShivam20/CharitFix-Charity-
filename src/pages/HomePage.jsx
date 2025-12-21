import React from "react";
import NavBar from "../components/MainPage/NavBar";
import Hero from "../components/MainPage/Hero";
import Card from "../components/AboutPage/Card";
import About from "../components/AboutPage/About";
import Brand from "../components/AboutPage/Brand";
import Blog from "../components/AboutPage/Blog";
import ContinuousImage from "../components/AboutPage/ContinuousImage";
import Footer from "../components/MainPage/Footer";
import { PiHandCoins } from "react-icons/pi";
import { TbHours24 } from "react-icons/tb";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FiBookOpen } from "react-icons/fi";

const Home = () => {
  return (
    <>
      <Hero heading="HOME" />
      <div className="flex justify-center items-center gap-0.5 px-4 flex-wrap">
        <Card
          num="01"
          title="Medical & Blood"
          colour="#FFD5024D"
          icon={<PiHandCoins className="text-2xl" />}
        />
        <Card
          num="02"
          title="Social Service"
          colour="#D4FDC8"
          icon={<TbHours24 className="text-2xl" />}
        />
        <Card
          num="03"
          title="Send a Charitable"
          colour="#B6F1FF"
          icon={<RiExchangeDollarLine className="text-2xl" />}
        />
        <Card
          num="04"
          title="Education"
          colour="#FFD0B6"
          icon={<FiBookOpen className="text-2xl" />}
        />
      </div>
      <About />
      <Brand />
      <Blog />
    </>
  );
};

export default Home;
