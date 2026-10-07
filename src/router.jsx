import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimony from "./pages/Testimony";
import FAQ from "./pages/FAQ";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "testimony",
                element: <Testimony />
            },
            {
                path: "faq",
                element: <FAQ />
            },
            {
                path: "detail/:id",
                element: <Detail />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);