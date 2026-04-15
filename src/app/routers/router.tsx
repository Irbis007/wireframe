import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../layout";
import { Customers, Dashboard, Organizations, Views } from "@pages";
import { Settings } from "@pages/settings";
import { URLS } from "@shared/consts";


export const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <Navigate to={URLS.home.dashboard} replace />,
      },
      {
        element: <Dashboard />,
        path: URLS.home.dashboard,
      },
      {
        element: <Views />,
        path: URLS.views,
      },
      {
        element: <Customers />,
        path: URLS.customers,
      },
      {
        element: <Organizations />,
        path: URLS.organizations,
      },
      {
        element: <Settings />,
        path: URLS.settings,
      },
    ],
  },
]);
