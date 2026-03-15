import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const rout = createBrowserRouter{

  }
  return (
    <div className="font-inter min-h-screen w-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0"></div>
    </div>
  );
}

export default App;
