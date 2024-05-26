import ErrorPage from "@/Error";
import HomePage from "@/pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);
