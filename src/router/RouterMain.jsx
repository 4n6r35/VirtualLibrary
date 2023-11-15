import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayOut } from "../components/LayOut/LayOut";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error404 from "../pages/404/404";
import Books from "../pages/Books/Books";
import UploadBook from "../pages/UploadBook/UploadBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,

    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/books",
    element: <LayOut type="user" />,
    children: [
      { path: "/books", element: <Books /> },
      // { path: "/", element: <Books /> },
    ],
  },
  {
    path: "/dashboard",
    element: <LayOut type="admin" />,

    children: [
      { path: "/dashboard", element: <Books /> },
      { path: "/dashboard/upload", element: <UploadBook /> },
    ],
  },
]);

export const RouterMain = () => {
  return <RouterProvider router={router} />;
};
