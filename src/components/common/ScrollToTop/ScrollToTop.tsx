import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, search } = useLocation();

    useEffect(() => {
        if (pathname === "/calculator") {
            window.scrollTo(0, 0);
        }
    }, [pathname, search]);

    return null;
}