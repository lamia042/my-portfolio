import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import MyIntro from "../components/MyIntro";
import Skills from "../components/Skills";
import MyJourney from "../components/MyJourney";
import Contact from "../components/Contact";
import GitHubInfo from "../components/GitHubInfo";
import Projects from "../components/Projects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
      path: "/",
      element: <Home />,
      },
      {
      path: "/about",
      element: <MyIntro />,
      },
      {
      path: "/skills",
      element: <Skills />,
      },
      {
      path: "/experience",
      element: <MyJourney />,
      },
      {
      path: "/githubactivity",
      element: <GitHubInfo />,
      },
      {
      path: "/contact",
      element: <Contact />,
      },
      {
      path: "/projects",
      element: <Projects />,
      },
    ]
  },
]);

export default Router;