
/*//import  Dashboard from './pages/Admin/Dashboard';
import './App.css'
//import CustomSidenav from './Components/CustomSidenav';
import Dashboard from './pages/Admin/Dashboard';
//import Booking from './pages/Booking'
//import LoginPage from './pages/Login'
//import SignupPage from './pages/Signup'
 //import LoginPage from './pages/Login'
 //import RegistrationPage from './pages/Signup'

 function App() {
  

   return (
     <Dashboard/>
   )
}

 export default App
 
 */

import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
//import { Suspense, lazy } from "react"
//import Spinner from "./components/Spinner";
import LoginPage from "./pages/Login";
import Booking from "./pages/Booking";
import SignupPage from "./pages/Signup";
import BoatHouses from "./pages/Boat";
import Payment from "./pages/Payment";
import User from "./pages/User";
import DeleteBooking from "./pages/Delete";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PaymentHistoryPage from "./pages/PayHistory";
import  Dashboard from "./pages/Admin/Dashboard";
import AdminUser from "./pages/Admin/adminUser";
//const LazyAbout = lazy(()=>import("./pages/About"));
//const LazyContact = lazy(()=>import("./pages/Contact"));
function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Routes>
          
        
          <Route path="/home" element={<Home/>}/>
          <Route path="/au" element={<AdminUser/>}/>
          <Route path="/ph" element={<PaymentHistoryPage/>}/>
          <Route path="/sg" element={<SignupPage/>}/>
          <Route path="/lg" element={<LoginPage/>}/>
          <Route path="/del" element={<DeleteBooking/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/exp" element={<BoatHouses/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/pay" element={<Payment/>}/>
          <Route path="/bk" element={<Booking/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/book" element={<Booking/>}/>
          <Route path="/ad" element={<Dashboard/>}/>
          <Route path="/reg" element={<SignupPage/>}/>
          <Route path="/logout" element={<LoginPage/>}/>
          </Routes>
        
        </div>
        </BrowserRouter>
    
    
    )
  }
  
  export default App
  /*
  
  {/* const router = createBrowserRouter([
    {
      path: '/home',
      element: <Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path: '/sg',
      element: <Suspense fallback={<Spinner/>}><SignupPage/></Suspense>
    },
    {
      path: '/lg',
      element: <Suspense fallback={<Spinner/>}><LoginPage/></Suspense>
    },
    {
      path: '/del',
      element: <Suspense fallback={<Spinner/>}><DeleteBooking/></Suspense>
    },
    
    
    {
      path: '/logout',
      element: <Suspense fallback={<Spinner/>}><LoginPage/></Suspense>
    },
    {
      path: '/about',
      element: <Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
    },
    {
      path: '/exp',
      element: <Suspense fallback={<Spinner/>}><BoatHouses/></Suspense>
    },
    {
      path: '/user',
      element: <Suspense fallback={<Spinner/>}><User/></Suspense>
    },
    {
      path: '/pay',
      element: <Suspense fallback={<Spinner/>}><Payment/></Suspense>
    },
    {
      path: '/bk',
      element: <Suspense fallback={<Spinner/>}><Booking/></Suspense>
    },
    {
      path: `/contact`,
      element: <Suspense fallback={<Spinner/>}><LazyContact/></Suspense>

    },
    {
      path: `/book`,
      element: <Suspense fallback={<Spinner/>}><Booking/></Suspense>

    },
    {
      path: `/reg`,
      element: <Suspense fallback={<Spinner/>}><SignupPage/></Suspense>

    } */
//   ])
//   return (
    
//         <RouterProvider router={router}/>
      
//   ); 
// }
// export default App
// */





