import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/shared/NotFound";


function App() {

  
  const router = createBrowserRouter([
    { path: "/", element: <Home />,
    children : [
      {path: "/", element: "nested element"}
    ]},
    {path: "*", element: <NotFound />}
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
