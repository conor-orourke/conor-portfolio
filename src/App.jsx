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
        path: "COPY",
        element: <CopyWriting />,
      },
      {
        path: "UX",
        element: <UxWriting />,
      },
      {
        path: "ARTICLES",
        element: <Articles />,
      },
      {
        path: "TRANSLATIONS",
        element: <Translation />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
