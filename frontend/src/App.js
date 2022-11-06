import {  Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage/Homepage';
import '../src/assets/css/style.css'
import '../src/assets/css/color/color-1.css'
import '../src/assets/vendors/revolution/css/layers.css'
import '../src/assets/vendors/revolution/css/settings.css'
import '../src/assets/vendors/revolution/css/navigation.css'
import '../src/assets/css/shortcodes/shortcodes.css'
import '../src/assets/css/typography.css'
import '../src/assets/css/color/color-1.css'
import '../src/assets/css/assets.css'
import '../src/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './SignIn/SignIn';


import SignUp from './SignUp/SignUp';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import FAQ from './FAQ/FAQ';
import Membership from './Membership/Membership';
import Events from './Events/Events';
import MembershipDropdown from './testers/MembershipDropDown';
import FinalSideNav from './SIDENAV/NAVBAR';
import EventDetails from './EventDetails/EventDetails';
import CommentSection from './FAQ/CommentSection';
import PaymentModal from './Membership/PaymentModal';
//import Selectdropdown from './Show Hide DIV Element on Selection';
import Dashboard from './Dashboard/Dashboard';
import Blog from "./Blog/blog";
import Blogdetail from "./Blog/blog-details";
import SaveDocument from './SaveDocument/saveDocument';
//import NavForDash from './Dashboard/NavForDash';
import Universities from './Dashboard/Universities';
import Country from './Dashboard/Country';
import Appointments from './Dashboard/Appointments';
import Faqs from './Dashboard/Faqs';
import Students from './Dashboard/Students';
import Blogs from './Dashboard/Blog';
import AdminLogin from './Dashboard/AdminLogin';



function App() {
  return (
    <>
    
 {/* <Navbar /> */}

    <Routes>
    
    {/*practice  routes*/}
    {/* <Route path="/ytsidenav" element={ <FinalSideNav />} />
    <Route path="/dropdown1" element={ <MembershipDropdown/>} />
    <Route path="/commentsection" element={ <CommentSection/>} />
    <Route path="/modal" element={ <PaymentModal/>} />
    <Route path="/selectdropdown" element={ <Selectdropdown/>} /> */}


    {/*actual routes */}
   
    <Route path="/" element={ <Homepage/>} />
    <Route path="/events" element={ <Events/>} />
    <Route path="/signin" element={<SignIn/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/contactus" element={<ContactUs/>} />
    <Route path="/faq" element={<FAQ/>} />
    <Route path="/membership" element={ <Membership/>} />
    <Route path="/blog" element={ <Blog/>} />
    <Route path="/blogdetail" element={ <Blogdetail/>} />
    <Route path="/eventdetails" element={ <EventDetails/>} />
    <Route path="/document" element={ <SaveDocument/>} />

     {/* dashboard routing  */}
     <Route path="/dashboard" element={ <Dashboard/>} > </Route>
     <Route path="/Admin" element={<AdminLogin />} />
    <Route path="/dashboard/universities" element={ <Universities/>} />
    <Route path="/dashboard/countries" element={ <Country/>} />
    <Route path="/dashboard/students" element={< Students/>} />
    <Route path="/dashboard/appointments" element={<Appointments/>} />
    <Route path="/dashboard/blogs" element={<Blogs/>} />
    <Route path="/dashboard/faqs" element={<Faqs/>} /> 
   

   </Routes>
      
    </>
  );
}

export default App;


