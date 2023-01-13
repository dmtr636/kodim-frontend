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
import { OpenDevelopmentPage } from "../pages/OpenDevelopmentPage";
import OpenDevelopmentProjectPage from "../pages/OpenDevelopmentProjectPage";
import {observer} from "mobx-react-lite";
import {openDevelopmentStore} from "../stores/openDevelopmentStore";


export const createRoutes = (projectStore: ProjectsStore): BreadcrumbsRoute[] => {
    const ProjectBreadcrumb = (props: BreadcrumbComponentProps) => (
        <>
            {projectStore.projects.find(project => project.id.toString() === props.match.params.id)?.name}
        </>
    )

    const CaseBreadcrumb = (props: BreadcrumbComponentProps) => (
        <>
            {projectStore.cases.find(project => project.id.toString() === props.match.params.id)?.name}
        </>
    )

    const OpenDevelopmentProjectBreadcrumb = (props: BreadcrumbComponentProps) => (
        <>
            {openDevelopmentStore.project?.name}
        </>
    )

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
                    path: "/open-development",
                    element: <OpenDevelopmentPage/>,
                    breadcrumb: "Открытая разработка"
                },
                {
                    path: "/open-development/:id",
                    element: <OpenDevelopmentProjectPage/>,
                    breadcrumb: OpenDevelopmentProjectBreadcrumb
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
