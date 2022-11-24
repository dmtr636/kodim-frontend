import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/common/Layout/Layout";
import {routes} from "./constants/routes";
import {Page404} from "./pages/Page404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    {routes.map(route =>
                        route.index
                            ? <Route index element={route.component} key={route.path}/>
                            : <Route path={route.path} element={route.component} key={route.path}/>
                    )}
                    <Route path={"*"} element={<Page404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
