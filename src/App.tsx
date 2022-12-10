import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import {createRoutes} from "./constants/routes";
import {projectsStore} from "./stores/projectsStore";

function App() {
    useEffect(() => {
        projectsStore.fetchProjects()
        projectsStore.fetchCases()
    }, [])

    const routes = createRoutes(projectsStore)

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routes.map(route =>
                        <Route path={route.path} element={route.element}/>
                    )}
                </Routes>
            </Layout>
            <ScrollToTop/>
        </BrowserRouter>
    );
}

export default App;
