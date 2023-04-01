import { createBrowserRouter } from "react-router-dom";
import Home from './../../Pages/Home/Home/Home';
import Main from "../../layouts/Main";
import UserProfile from "../../Pages/Home/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "user/:userId", element: <UserProfile/>}
        ]
    }
]);

export default router;

