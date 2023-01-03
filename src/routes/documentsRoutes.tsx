import React, {lazy, Suspense} from "react";
import DocumentsTextFallback from "../components/documents/DocumentsText/DocumentsTextFallback";

const PrivacyPolicy = lazy(() => import("../components/documents/DocumentsText/PrivacyPolicy"))
const ContractOffer = lazy(() => import("../components/documents/DocumentsText/ContractOffer"))

export const documentsRoutes = [
    {
        path: "/documents/privacy",
        element:
            <Suspense fallback={<DocumentsTextFallback/>}>
                <PrivacyPolicy/>
            </Suspense>,
        breadcrumb: "Политика конфиденциальности"
    },
    {
        path: "/documents/contract",
        element:
            <Suspense fallback={<DocumentsTextFallback/>}>
                <ContractOffer/>
            </Suspense>,
        breadcrumb: "Договор-оферта"
    },
]
