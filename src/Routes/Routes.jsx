import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CategoryItem from "../Pages/Home/Categories/CategoryItem";
import PetLesting from "../Pages/PetLesting/PetLesting";
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import PetDetails from "../Pages/Home/PetDetails/PetDetails";
import DonationDetails from "../Pages/DonationCampaigns/DonationDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/UserHome/UserHome";
import AddAPet from "../Pages/AddaPet/AddAPet";
import ProtectRoute from "../PrivateRoute/ProtectRoute";
import MyAddedPets from "../Pages/MyAddedPets/MyAddedPets";
import UpdatePet from "../Pages/MyAddedPets/UpdatePet";
import AdminRoute from "../PrivateRoute/AdminRoute";
import AllUsers from "../Pages/AdminPage/AllUsers/AllUsers";
import AdminAllPets from "../Pages/AdminPage/AdminAllPets/AdminAllPets";
import CreateDonation from "../Pages/CreateDonation/CreateDonation";

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
          // loader: () => fetch('/category.json')
        },
        {
          path: "/pet/:id",
          element: <PetDetails></PetDetails>
        },
        {
          path: "/donationcampaign",
          element: <DonationCampaigns></DonationCampaigns>
          // loader: () => fetch('/category.json')
        },
        {
          path: "/donationcampaign/:id",
          element: <DonationDetails></DonationDetails>
          // loader: () => fetch('/category.json')
        },
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "/dashboard",
          element: <ProtectRoute><UserHome></UserHome></ProtectRoute>
        },
        {
          path: "/dashboard/addapet",
          element: <ProtectRoute><AddAPet></AddAPet></ProtectRoute>
        },
        {
          path: "/dashboard/myAddedPets",
          element: <ProtectRoute><MyAddedPets></MyAddedPets></ProtectRoute>
        },
        {
          path: "/dashboard/updatepet/:id",
          element: <ProtectRoute><UpdatePet></UpdatePet></ProtectRoute>
        },
        {
          path: "/dashboard/createDonation",
          element: <ProtectRoute><CreateDonation></CreateDonation></ProtectRoute>
        },
        {
          path: "/dashboard/allusers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "/dashboard/adminAllPets",
          element: <AdminRoute><AdminAllPets></AdminAllPets></AdminRoute>
        }
      ]
    }
  ]);

  export default router;