import {MainPage} from "../pages/MainPage";
import {CasesPage} from "../pages/CasesPage";
import {ProjectsPage} from "../pages/ProjectsPage";
import {CalculatorPage} from "../pages/CalculatorPage";
import {privacyPolicy} from "./documents";
import DocumentsCertificate from "../components/documents/DocumentsCertificate/DocumentsCertificate";
import DocumentsPage from "../pages/DocumentsPage";
import {Navigate} from "react-router-dom";
import React from "react";
import {CaseOpen} from "../components/cases/CaseOpen/CaseOpen";
import {Page404} from "../pages/Page404";
import {BreadcrumbComponentProps, BreadcrumbsRoute} from "use-react-router-breadcrumbs";
import {ProjectsStore} from "../stores/projectsStore";


export const createRoutes = (projectStore: ProjectsStore): BreadcrumbsRoute[] => {
    const ProjectBreadcrumb = (props: BreadcrumbComponentProps) => {
        return (
            <>{projectStore.projects.find(project => project.id.toString() === props.match.params.id)?.name}</>
        )
    };
    const CaseBreadcrumb = (props: BreadcrumbComponentProps) => {
        return (
            <>{projectStore.cases.find(project => project.id.toString() === props.match.params.id)?.name}</>
        )
    }

    return (
        [
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
                path: "/documents",
                element: <Navigate to={"/documents/privacy"} replace/>,
                breadcrumb: "Документы"
            },
            {
                path: "/documents/privacy",
                element: <DocumentsPage title={"Политика конфиденциальности"} text={privacyPolicy}/>,
                breadcrumb: "Политика конфиденциальности"
            },
            {
                path: "/documents/contract",
                element: <DocumentsPage title={"Договор-оферта"} text={privacyPolicy}/>,
                breadcrumb: "Договор-оферта"
            },
            {
                path: "/documents/certificate",
                element: <DocumentsPage title={"Договор-оферта"} component={<DocumentsCertificate/>}/>,
                breadcrumb: "Справка о постановке на учёт"
            },
            {
                path: "/cases/:id",
                element: <CaseOpen type={"case"}/>,
                breadcrumb: CaseBreadcrumb
            },
            {
                path: "/projects/:id",
                element: <CaseOpen type={"project"}/>,
                breadcrumb: ProjectBreadcrumb
            },
            {
                path: "*",
                element: <Page404/>,
                breadcrumb: "Такой страницы больше нет или она удалена"
            }
        ]
    )
}