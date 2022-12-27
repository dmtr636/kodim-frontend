import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import DocumentsLayout from "../components/documents/DocumentsLayout/DocumentsLayout";
import DocumentsMenu from "../components/documents/DocumentsMenu/DocumentsMenu";
import DocumentsContent from "../components/documents/DocumentsContent/DocumentsContent";
import {documentsRoutes} from "../routes/documentsRoutes";
import {Helmet} from "react-helmet";
import {getMetaByPath} from "../constants/pageMeta";

const DocumentsPage = () => {
    const location = useLocation()
    const documentTitle = documentsRoutes.find(route =>
        location.pathname.includes(route.path)
    )?.breadcrumb

    const meta = getMetaByPath("/documents")

    return (
        <DocumentsLayout>
            <Helmet>
                <meta name={"description"} content={meta?.description}/>
                <meta name={"keywords"} content={meta?.keywords}/>
            </Helmet>

            <DocumentsMenu/>
            <DocumentsContent title={documentTitle}>
                <Outlet/>
            </DocumentsContent>
        </DocumentsLayout>
    );
};

export default DocumentsPage;