import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./app.css";
import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "./Home";
import Members from "./Members";
import Events from "./Events";
import Departments from "./Departments";
import NotFound from "./NotFound";
import Create from "./Create";
import UserDetails from "./UserDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/members",
          element: <Members />,
        },
        {
          path: "/members/create",
          element: <Create />,
        },
        {
          path: "/members/:id",
          element: <UserDetails />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/departments",
          element: <Departments />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
