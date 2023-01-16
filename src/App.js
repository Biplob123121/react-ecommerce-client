import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About/About";
import AllProducts from "./pages/Category/AllProducts";
import Category from "./pages/Category/Category";
import Food from "./pages/Category/Food";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Shared/NotFound";


function App() {

  
  const router = createBrowserRouter([
    { path: "/",element: <Home />,
    children :[
      {path: "/", element: <AllProducts />},
      {path: "/food", element: <Food />},
    ]},
    {path: "/about", element: <About />, },
    {path: "/", element: <Category />,},
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
