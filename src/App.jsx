import React from "react";

import {
  // BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import {
  HomeLayout,
  Home,
  CopyWriting,
  UxWriting,
  Articles,
  Translation,
} from "./categoryMenu/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "copywriting",
        element: <CopyWriting />,
      },
      {
        path: "ux-writing",
        element: <UxWriting />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "translation",
        element: <Translation />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
