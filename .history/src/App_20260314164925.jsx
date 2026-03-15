import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home />, children: [] }],
    },
  ]);
  return <></>;
}

export default App;
