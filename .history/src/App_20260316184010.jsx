import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NoPage from "./pages/NoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NoPage />,
      children: [
        {
          errorElement: <NoPage />,
          children: [
            { index: true, element: <Home /> },
            { path: ":country", element: <Country /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
