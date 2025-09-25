import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
      path: "/",
      element: <Home />,
      },
    ]
  },
]);

export default Router;