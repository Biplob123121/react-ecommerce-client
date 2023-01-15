import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Shared/NotFound";


function App() {

  
  const router = createBrowserRouter([
    { path: "/",element: <Home /> },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
