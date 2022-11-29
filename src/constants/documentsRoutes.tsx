import DocumentsCertificate from "../components/documents/DocumentsCertificate/DocumentsCertificate";

export const documentsRoutes = [
    {
        path: "privacy",
        component: <h1>Privacy</h1>,
        name: "Политика конфиденциальности"
    },
    {
        path: "contract",
        component: <h1>Contract</h1>,
        name: "Договор-оферта"
    },
    {
        path: "certificate",
        component: <DocumentsCertificate/>,
        name: "Справка о постановке на учёт"
    },
]
