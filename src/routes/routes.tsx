import {Navigate} from "react-router-dom";
import React from "react";
import {CaseOpen} from "../components/cases/CaseOpen/CaseOpen";
import {Page404} from "../pages/Page404";
import {BreadcrumbComponentProps, BreadcrumbsRoute} from "use-react-router-breadcrumbs";
import {ProjectsStore} from "../stores/projectsStore";
import Layout from "../components/common/Layout/Layout";
import {navRoutes} from "./navRoutes";
import {documentsRoutes} from "./documentsRoutes";
import DocumentsPage from "../pages/DocumentsPage";


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

    return [
        {
            path: "/",
            element: <Layout/>,
            children: [
                ...navRoutes,
                {
                    path: "/documents",
                    element: <DocumentsPage/>,
                    breadcrumb: "Документы",
                    children: [
                        ...documentsRoutes,
                        {
                            index: true,
                            element: <Navigate to={documentsRoutes[0].path} replace/>,
                        },
                    ]
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
            ] as BreadcrumbsRoute[]
        }
    ]
}