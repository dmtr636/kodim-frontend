import {MainPage} from "../pages/MainPage";
import {CasesPage} from "../pages/CasesPage";
import {ProjectsPage} from "../pages/ProjectsPage";
import {CalculatorPage} from "../pages/CalculatorPage";
import {FAQPage} from "../pages/FAQPage";

export const routes = [
    {
        name: "Главная",
        path: "/",
        component: <MainPage/>,
        index: true
    },
    {
        name: "Кейсы",
        path: "/cases",
        component: <CasesPage/>
    },
    {
        name: "Наши проекты",
        path: "/projects",
        component: <ProjectsPage/>
    },
    {
        name: "Калькулятор услуг",
        path: "/calculator",
        component: <CalculatorPage/>
    },
    {
        name: "FAQ",
        path: "/faq",
        component: <FAQPage/>
    }
]
