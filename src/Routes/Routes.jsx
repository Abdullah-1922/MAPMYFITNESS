import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddBlog from "../Page/Blog/AddBlog";
import Blog from "../Page/Blog/Blog";


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
                element:<AddBlog></AddBlog>
            }
        ]
    }
  ])