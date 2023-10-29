import Home from '../pages/home/Home';
import App from './../App';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);


export default router;