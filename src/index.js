import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import Body from './Components/Body';
import JobMainPage from './Components/JobMainPage';
import ContestMainPage from './Components/ContestMainPage';
import ResumeBuilderPage from './Components/ResumeBuilderPage';
import NewsPage from './Components/NewsPage';
import JobCategoryPage from './Components/JobCategoryPage';
import Jobs from './Components/Jobs';
import Codingplatform from './Components/CodingPlatform';
import JobApply from './Components/JobApply';
import Analyzer from './Components/Analyzer';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/jobmainpage",
        element: <JobMainPage />,

      },

      {
        path: "jobcategories",
        element: <JobCategoryPage />
      },
      {
        path: "jobs",
        element: <Jobs />
      },
      {
        path: "analyzer",
        element: <Analyzer/>
      },
    
      {
        path: "jobapply",
        element: <JobApply />
      },

      {
        path: "contestmainpage",
        element: <ContestMainPage />,
      },
      {
        path: "/resumebuilder",
        element: <ResumeBuilderPage />,
      },
      {
        path: "/newspage",
        element: <NewsPage />,
      },
      
      {
        path: "/codingplatform",
        element: <Codingplatform/>,
      },
     
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);


