import React, {ReactNode} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import DocumentsLayout from "../components/documents/DocumentsLayout/DocumentsLayout";
import DocumentsMenu from "../components/documents/DocumentsMenu/DocumentsMenu";
import DocumentsContent from "../components/documents/DocumentsContent/DocumentsContent";
import {documentsRoutes} from "../constants/documentsRoutes";
import DocumentsText from "../components/documents/DocumentsText/DocumentsText";

const DocumentsPage = (props: {
    title: string,
    text?: string[],
    component?: ReactNode
}) => {
    const location = useLocation()
    const documentTitle = documentsRoutes.find(route =>
        location.pathname.includes(route.path)
    )?.name

    return (
        <DocumentsLayout>
            <DocumentsMenu/>
            <DocumentsContent title={documentTitle}>
                {props.text &&
                    <DocumentsText text={props.text} />
                }
                {props.component}
            </DocumentsContent>
        </DocumentsLayout>
    );
};

export default DocumentsPage;