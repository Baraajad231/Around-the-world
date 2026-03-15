import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: ":country", element: <Country /> }
      ],
    },
  ]);
  return <></>;
}

export default App;
