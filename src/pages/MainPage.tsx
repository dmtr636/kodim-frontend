import React, {useEffect} from "react";
import { Banner } from "../components/main/Banner/Banner";
import { OurClients } from "../components/main/OurClients/OurClients";
import { QA } from "../components/main/QA/QA";
import { Services } from "../components/main/Services/Services";
import { StartProject } from "../components/main/StartProject/StartProject";
import { Ticker } from "../components/main/Ticker/Ticker";
import {useLocation, useNavigate} from "react-router-dom";

export const MainPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.hash === "#faq") {
            navigate("/", {replace: true})
            document.getElementById("faq")?.scrollIntoView({behavior: "smooth"})
        }
    }, [location.hash])

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
