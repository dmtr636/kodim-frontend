import DocumentsCertificate from "../components/documents/DocumentsCertificate/DocumentsCertificate";
import DocumentsContent from "../components/documents/DocumentsContent/DocumentsContent";
import DocumentsText from "../components/documents/DocumentsText/DocumentsText";
import {privacyPolicy} from "./documents";

export const documentsRoutes = [
    {
        path: "privacy",
        component: <DocumentsText text={privacyPolicy}/>,
        name: "Политика конфиденциальности"
    },
    {
        path: "contract",
        component: <DocumentsText text={privacyPolicy}/>,
        name: "Договор-оферта"
    },
    {
        path: "certificate",
        component: <DocumentsCertificate/>,
        name: "Справка о постановке на учёт"
    },
]
