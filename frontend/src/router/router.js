import { createBrowserRouter } from "react-router-dom";
import Index from "../pages";
import Register from "../pages/register";
import Login from "../pages/login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
