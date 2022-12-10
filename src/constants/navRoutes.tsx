import {MainPage} from "../pages/MainPage";
import {CasesPage} from "../pages/CasesPage";
import {ProjectsPage} from "../pages/ProjectsPage";
import {CalculatorPage} from "../pages/CalculatorPage";
import React from "react";

export const navRoutes = [
    {
        path: "/",
        element: <MainPage/>,
        breadcrumb: "Главная",
    },
    {
        path: "/cases",
        element: <CasesPage/>,
        breadcrumb: "Кейсы",
    },
    {
        path: "/projects",
        element: <ProjectsPage/>,
        breadcrumb: "Наши проекты",
    },
    {
        path: "/calculator",
        element: <CalculatorPage/>,
        breadcrumb: "Калькулятор услуг",
    },
    {
        path: "/#faq",
        element: <MainPage key={"faq"}/>,
        breadcrumb: "FAQ",
        preventScrollReset: true
    }
]
