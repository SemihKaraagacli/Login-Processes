import { createBrowserRouter } from "react-router-dom";
import Index from "../pages";
import Register from "../pages/register";
import Login from "../pages/login";
import Auth from "../pages/auth";
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
  {
    path: "/auth",
    element: <Auth />,
  },
]);
