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
import Certificates from "../components/Certificates";
import Education from "../components/Education";

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
      path: "/githubact",
      element: <GitHubInfo username="lamia042" />,
      },
      {
      path: "/contact",
      element: <Contact />,
      },
      {
      path: "/projects",
      element: <Projects />,
      },
      {
      path: "/certificates",
      element: <Certificates />,
      },
      {
      path: "/education",
      element: <Education />,
      },
    ]
  },
]);

export default Router;