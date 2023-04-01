import { createBrowserRouter } from "react-router-dom";
import Home from './../../Pages/Home/Home/Home';
import Main from "../../layouts/Main";
import UserProfile from "../../Pages/Home/UserProfile/UserProfile";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import NotFound from "../../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "/user/:userId", element: <UserProfile/>},
            { path: "/about", element: <About/> },
            { path: "/contact", element: <Contact/> },
            { path: "*", element: <NotFound/>}
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);

export default router;

