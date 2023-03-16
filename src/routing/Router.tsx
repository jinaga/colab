import { Typography } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Frame } from "../frame/Frame";
import { HomePage } from "../home/HomePage";
import { ErrorPage } from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frame />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />
      },
      {
        path: "*",
        element: <Typography>Not Found</Typography>,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

export const Router = () => (
  <RouterProvider router={router} />
);
