import React from "react";
import Navbar from '../components/navbar/Navbar';
import LandingPage from "@/components/landing/LandingPage";
import Logo from "@/components/logos/Logos";
import Features from "@/components/features/Features";
import Xerocodee from "@/components/xerocodee/Xerocodee";
import Scaling from "@/components/scaling/Scaling";
import Modernize from "@/components/modernize/Modernize";
import XercodeeWayFirstPage from "@/components/xerocodeeWay/XerocodeeWayFirstPage";
import XercodeeWaySecondPage from "@/components/xerocodeeWay/XerocodeeWaySecondPage";
import XercodeeWayThirdPage from "@/components/xerocodeeWay/XerocodeeWayThirdPage";
import Newsletter from "@/components/newsletter/Newsletter";
import Footer from "@/components/footer/Footer";
import Carousel from "@/components/carousels/Carousels";

const IndexPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      {/* <Logo /> */}
      <Features />
      <Xerocodee />
      <Scaling />
      <Modernize />
      <XercodeeWayFirstPage />
      <XercodeeWaySecondPage />
      <XercodeeWayThirdPage />
      <Carousel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default IndexPage;