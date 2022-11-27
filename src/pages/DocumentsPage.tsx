import React from 'react';
import {Outlet} from "react-router-dom";

const DocumentsPage = () => {
    return (
        <div>
            <h1>Documents page</h1>
            <Outlet />
        </div>
    );
};

export default DocumentsPage;