import { Typography } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Frame } from "../frame/Frame";
import { ProjectsPage } from "../projects/ProjectsPage";
import { ErrorPage } from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frame />,
    children: [
      {
        index: true,
        element: <ProjectsPage />,
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
