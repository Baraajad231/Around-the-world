import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>
    ,children=;[
      {index: true}
    ]
  }]);
  return (
 <></>
  )
}

export default App;
