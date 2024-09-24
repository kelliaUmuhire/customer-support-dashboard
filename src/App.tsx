import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/Default";
import Inquiries from "./pages";
import Inquiry from "./pages/view";
import Error from "./pages/404";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Inquiries /> },
      { path: "view/:id", element: <Inquiry /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

const App: FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
