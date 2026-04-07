import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
// import HomePage from "./pages/home";
import { getBasePath } from "./utils/zma";
import HomePage from "./pages/home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ],
  {
    basename: getBasePath(),
  },
);

export default router;
