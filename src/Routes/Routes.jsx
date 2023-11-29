import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CategoryItem from "../Pages/Home/Categories/CategoryItem";
import PetLesting from "../Pages/PetLesting/PetLesting";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/categoryItem",
          element: <CategoryItem></CategoryItem>,
          loader: () => fetch('/category.json')
        },
        {
          path: "/petLesting",
          element: <PetLesting></PetLesting>,
          loader: () => fetch('/category.json')
        },
      ]
    },
  ]);

  export default router;