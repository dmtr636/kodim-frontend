import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import DocumentsLayout from "../components/documents/DocumentsLayout/DocumentsLayout";
import DocumentsMenu from "../components/documents/DocumentsMenu/DocumentsMenu";
import DocumentsContent from "../components/documents/DocumentsContent/DocumentsContent";
import {documentsRoutes} from "../constants/documentsRoutes";

const DocumentsPage = () => {
    const location = useLocation()
    const documentTitle = documentsRoutes.find(route =>
        location.pathname.includes(route.path)
    )?.name

    return (
        <DocumentsLayout>
            <DocumentsMenu/>
            <DocumentsContent title={documentTitle}>
                <Outlet/>
            </DocumentsContent>
        </DocumentsLayout>
    );
};

export default DocumentsPage;