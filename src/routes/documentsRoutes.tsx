import PrivacyPolicy from "../components/documents/DocumentsText/PrivacyPolicy";
import React from "react";
import ContractOffer from "../components/documents/DocumentsText/ContractOffer";

export const documentsRoutes = [
    {
        path: "/documents/privacy",
        element: <PrivacyPolicy/>,
        breadcrumb: "Политика конфиденциальности"
    },
    {
        path: "/documents/contract",
        element: <ContractOffer/>,
        breadcrumb: "Договор-оферта"
    },
]
