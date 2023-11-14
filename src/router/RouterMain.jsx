import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayOut } from "../components/LayOut/LayOut";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,

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
]);

export const RouterMain = () => {
  return <RouterProvider router={router} />;
};
