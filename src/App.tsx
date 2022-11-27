import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import {navRoutes} from "./constants/navRoutes";
import {Page404} from "./pages/Page404";
import DocumentsPage from "./pages/DocumentsPage";
import {documentsRoutes} from "./constants/documentsRoutes";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    {navRoutes.map(route =>
                        <Route path={route.path} element={route.component} key={route.path}/>
                    )}
                    <Route path={"/documents"} element={<DocumentsPage/>}>
                        <Route index element={<Navigate to={documentsRoutes[0].path} replace/>}/>
                        {documentsRoutes.map(route =>
                            <Route path={route.path} element={route.component} key={route.path}/>
                        )}
                    </Route>
                    <Route path={"*"} element={<Page404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
