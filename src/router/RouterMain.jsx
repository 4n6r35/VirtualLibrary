/* eslint-disable react/no-children-prop */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtecetedRoutes";
import { LayOut } from "../components/LayOut/LayOut";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error404 from "../pages/404/404";
import Books from "../pages/Books/Books";
import UploadBook from "../pages/UploadBook/UploadBook";
import DetailsBook from "../pages/DetailsBook/DetailsBook";
import { AuthProvider } from "../context/ctx";
import UpdateBook from "../pages/UpdatedBook/UpdateBook";
import BooksOrder from "../pages/BookOrder/BookOrder";
import { NavBar, NavBarD } from "../components/NavBar/NavBar";

export const RouterMain = () => {
  const auth = localStorage.getItem("auth");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthProvider>
          <LayOut
            children={auth === "authenticated" ? <NavBarD /> : <NavBar />}
          />
        </AuthProvider>
      ),
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
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/books",
          element: (
            <AuthProvider>
              <LayOut children={<NavBarD />} />
            </AuthProvider>
          ),
          children: [
            { path: "/books", element: <Books /> },
            { path: "/books/:id", element: <DetailsBook /> },
            { path: "/books/upload", element: <UploadBook /> },
            { path: "/books/update/:id", element: <UpdateBook /> },
            { path: "/books/orders", element: <BooksOrder /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
