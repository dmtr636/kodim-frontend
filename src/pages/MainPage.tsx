import React from "react";
import { Banner } from "../components/main/Banner/Banner";
import { OurClients } from "../components/main/OurClients/OurClients";
import { QA } from "../components/main/QA/QA";
import { Services } from "../components/main/Services/Services";
import { StartProject } from "../components/main/StartProject/StartProject";
import { Ticker } from "../components/main/Ticker/Ticker";

export const MainPage = () => {
  return (
    <div>
      <Banner />
      <OurClients />
      <Ticker />
      <Services/>
      <QA/>
      <StartProject/>
    </div>
  );
};

export default MainPage
