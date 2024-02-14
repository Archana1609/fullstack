
// import './App.css'
// import LoginPage from './pages/Login'

// function App() {
  

//   return (
//     <LoginPage/>
//   )
// }

// export default App

//import CustomNavbar from "./components/CustomNavbar";

import { RouterProvider, createBrowserRouter } from "react-router-dom"
//import About from "./pages/About"
import Home from "./pages/Home"
//import Contact from "./pages/Contact"
import { Suspense, lazy } from "react"
import Spinner from "./components/Spinner";
const LazyAbout = lazy(()=>import("./pages/About"));
const LazyContact = lazy(()=>import("./pages/Contact"));

//import CustomSidenav from "./components/CustomSidenav";
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path: '/about',
      element: <Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
    },
    {
      path: `/contact`,
      element: <Suspense fallback={<Spinner/>}><LazyContact/></Suspense>

    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App