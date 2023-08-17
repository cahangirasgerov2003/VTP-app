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
import Edit from "./Edit";
import SearchResult from "./SearchResult";

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
          path: "/members/edit/:id",
          element: <Edit />,
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
          path: "/departments/edit/:id",
          element: <Edit />,
        },
        {
          path: "/departments/:id",
          element: <UserDetails />,
        },
        {
          path: "/search",
          element: <SearchResult />,
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
