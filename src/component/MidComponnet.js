import React from "react";
import "./MidComponnet.css";
import Footer from "./Footer";
import Header from "./Header";
import Checkout from "./Checkout";
import ChargerModal from "./ChargerModal";
import CarInfo from "./CarInfo";
export default function MidComponnet() {
  return (
    <div>
      <div className="wrapper">
      <Header/>
       <CarInfo/>
     <Checkout/>
      <ChargerModal/>
       <Footer/>
      </div>
    </div>
  );
}
