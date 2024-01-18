import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddBlog from "../Page/Blog/AddBlog";
import Blog from "../Page/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import BeTrainer from "../Page/BeTrainer/BeTrainer";
import BlogDetails from "../Page/Blog/BlogDetails";
import Gallery from "../Page/Gallery/Gallery";
import DashBoard from "../Roots/DashboardLayout/DashBoard";
import AllUsers from "../Page/Dashboard/DashBoardContent/AdminComponents/AllUsers";
import AllPendingTrainer from "../Page/Dashboard/DashBoardContent/AdminComponents/AllPendingTrainer";
import AllVerifiedTrainer from "../Page/Dashboard/DashBoardContent/AdminComponents/AllVerifiedTrainer";
import ShowNewsLetterSubscribers from "../Page/Dashboard/DashBoardContent/AdminComponents/ShowNewsLetterSubscribers";
import AddClasses from "../Page/Dashboard/DashBoardContent/TrainerComponents/AddClasses";
import AllClasses from "../Page/Classes/AllClasses";
import ClassDetails from "../Page/Classes/ClassDetails";
import TrainerPage from "../Page/Trainer/TrainerPage";
import TrainerDetails from "../Page/Trainer/TrainerDetails";


  export const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/addBlog',
                element:<PrivateRoute><AddBlog></AddBlog></PrivateRoute>
            },
            {
                path:'/addTrainer',
                element:<PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
            },
            {
                path:'blog/:id',
                element:<BlogDetails></BlogDetails>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/allClasses',
                element:<PrivateRoute><AllClasses></AllClasses></PrivateRoute>
            },
            {
                path:'/class/:id',
                element:<PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>
            },
            {
                path:'/trainerPage',
                element:<PrivateRoute><TrainerPage></TrainerPage></PrivateRoute>
            },
            {
                path:'/trainer/:email',
                element:<PrivateRoute><TrainerDetails></TrainerDetails></PrivateRoute>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
        children:[
            
            {
                path:'allUser',
                
                element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            },
            {
                path:'allPendingTrainer',
                element:<AllPendingTrainer></AllPendingTrainer>
            },
            {
                path:'allVerifiedTrainer',
                element:<AllVerifiedTrainer></AllVerifiedTrainer>
            },
            {
                path:'newsletterSubscribers',
                element:<ShowNewsLetterSubscribers></ShowNewsLetterSubscribers>
            },
            {
                path:'addClass',
                element:<AddClasses></AddClasses>
            }
        ]
    }

  ])