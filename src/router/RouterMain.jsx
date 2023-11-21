import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

export const RouterMain = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthProvider>
          <LayOut />
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
      path: "/books",
      element: (
        <AuthProvider>
          <LayOut />
        </AuthProvider>
      ),
      children: [
        { path: "/books", element: <Books /> },
        { path: "/books/:id", element: <DetailsBook /> },
        { path: "/books/upload", element: <UploadBook /> },
        { path: "/books/update/:id", element: <UpdateBook /> },
        { path: "/books/visualization", element: <BooksOrder /> },
      ],
    },
   
  ]);

  return <RouterProvider router={router} />;
};
