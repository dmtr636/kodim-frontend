import React, {useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createRoutes} from "./constants/routes";
import {projectsStore} from "./stores/projectsStore";

function App() {
    useEffect(() => {
        projectsStore.fetchProjects()
        projectsStore.fetchCases()
    }, [])

    const routes = createRoutes(projectsStore)
    const router = createBrowserRouter(routes)

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
