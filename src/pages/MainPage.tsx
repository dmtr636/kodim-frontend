import React from "react";
import { Banner } from "../components/main/Banner/Banner";
import { OpenDevelopmentBanner } from "../components/main/OpenDevelopmentBanner/OpenDevelopmentBanner";
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
      <OpenDevelopmentBanner/>
      <Services/>
      <QA/>
      <StartProject/>
    </div>
  );
};

export default MainPage
