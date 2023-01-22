import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllProduct from "./components/AllProduct";
import Category from "./components/Category";
import Fashion from "./components/Fashion";
import Food from "./components/Food";
import Home from "./pages/Home";
import NotFound from "./pages/shared/NotFound";


function App() {

  
  const router = createBrowserRouter([
    { path: "/", element: <Home />,
    children : [
      {path: "/", element: <Category />},
      {path: "/all-product", element: <AllProduct />},
      {path: "/food", element: <Food />},
      {path: "/fashion", element: <Fashion />},
    ]},
    {path: "*", element: <NotFound />}
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
