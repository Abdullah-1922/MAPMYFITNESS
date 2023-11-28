
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




const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  </HelmetProvider>
  </QueryClientProvider>)