import React, {Suspense} from "react";
import {ReactLazyPreload} from "../utils/utils";

const PrivacyPolicy = ReactLazyPreload(() => import("../components/documents/DocumentsText/PrivacyPolicy"))
const ContractOffer = ReactLazyPreload(() => import("../components/documents/DocumentsText/ContractOffer"))

PrivacyPolicy.preload()
ContractOffer.preload()

export const documentsRoutes = [
    {
        path: "/documents/privacy",
        element:
            <Suspense>
                <PrivacyPolicy/>
            </Suspense>,
        breadcrumb: "Политика конфиденциальности"
    },
    {
        path: "/documents/contract",
        element:
            <Suspense>
                <ContractOffer/>
            </Suspense>,
        breadcrumb: "Договор-оферта"
    },
]
