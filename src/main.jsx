
import ReactDOM from 'react-dom/client'

import './index.css'
import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import AuthContextProvider from './Provider/AuthContextProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
    <AuthContextProvider>
    <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  </HelmetProvider>
  </QueryClientProvider>)