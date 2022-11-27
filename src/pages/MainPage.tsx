import React from "react";
import { Banner } from "../components/main/Banner/Banner";
import { OurClients } from "../components/main/OurClients/OurClients";
import { Services } from "../components/main/Services/Services";
import { Ticker } from "../components/main/Ticker/Ticker";

export const MainPage = () => {
  return (
    <div>
      <Banner />
      <OurClients />
      <Ticker />
      <Services/>
    </div>
  );
};
