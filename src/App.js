import logo from './logo.svg';
import './App.css';
import Hero from './views/User/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home1 from './Visiting/Visit-Tankaman/Home1';
import Video1 from './Visiting/Visit-Tankaman/Video1';
import About1 from './Visiting/Visit-Tankaman/About1';
import Login from './views/User/Login';
import Register from './views/User/Register';
import AdminLoginComponent from './views/Admin/AdminLogin';
import Landing from './views/User/Landing';
import CreateCourseForm from './views/Admin/CreateCourseForm';
import GetCourse from './views/Admin/GetCourse';
import CourseDetails from './views/Admin/CourseDetails';
import GetClientCourse from './views/User/GetClientCourse';
import ClientCourseDetails from './views/User/ClientCourseDetails'
import AdminNav from './views/Admin/AdminNav';
import AdminNotification from './views/Admin/AdminNotification';
import GetNotification from './views/User/GetNotification';
import BlazeProduct from './views/User/BlazeProduct';
import ContactForm from './views/User/Contact';
import CoursePost from './views/User/CoursePost';
import GetMessages from './views/Admin/GetMessages';
import ClientNav from './views/User/ClientNav';
import ServicesSection from './views/User/Service';

function  Home() {
  return (
    <main>
      <ClientNav/>
      {/* <Header /> */}
      <Hero />
      <ServicesSection />
    </main>
  )
}

function Tankaman() {
  return (
    <main>
      <Home1 />
      <About1 />
      <Video1 />
    </main>
  )
}



function App() {
  return (
    <Routes>
      
      {/* Admin routes */}
      <Route path="/" element={<BlazeProduct />} />
      <Route path="/admin-login" element={<AdminLoginComponent />} />
      <Route path= "/create-course" element= {<CreateCourseForm />}/>
      <Route path="/get-course" element = {<GetCourse/>}/>
      <Route path="/course/:id" element = {<CourseDetails/>}/>
      <Route path="/admin-notification" element = {< AdminNotification/>}/>
      <Route path="/get-messages" element = {< GetMessages/>}/>
      
      {/* Client routes */}
      <Route path="/client-login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/get-client-course' element= { <GetClientCourse />} />
      <Route path='/client-course/:id' element= { <ClientCourseDetails />} />
      <Route path='/GetNotification/' element= { <GetNotification />} />
      <Route path='/ContactForm/' element= { <ContactForm />} />
      <Route path='/CoursePost/' element= { <CoursePost />} />
      <Route path='/Home/' element= {<Home />} />
    </Routes>

  );
}

export default App;
