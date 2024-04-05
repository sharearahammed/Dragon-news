import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import NewsDetails from "../../pages/Home/NewsDetails/NewsDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
        {
          path: '/news/:id',
          element: <NewsDetails></NewsDetails>
        }
      ]
    },
  ]);

  export default router