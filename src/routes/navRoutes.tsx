import {MainPage} from "../pages/MainPage";
import {CasesPage} from "../pages/CasesPage";
import {ProjectsPage} from "../pages/ProjectsPage";
import {CalculatorPage} from "../pages/CalculatorPage";
import React, {createRef} from "react";

export const navRoutes = [
    {
        path: "/",
        element: <MainPage/>,
        breadcrumb: "Главная",
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: "/cases",
        element: <CasesPage/>,
        breadcrumb: "Кейсы",
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: "/projects",
        element: <ProjectsPage/>,
        breadcrumb: "Наши проекты",
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: "/calculator",
        element: <CalculatorPage/>,
        breadcrumb: "Калькулятор услуг",
        nodeRef: createRef<HTMLDivElement>(),
    },
    {
        path: "/#faq",
        element: <MainPage key={"faq"}/>,
        breadcrumb: "FAQ",
        preventScrollReset: true,
        nodeRef: createRef<HTMLDivElement>(),
    }
]
