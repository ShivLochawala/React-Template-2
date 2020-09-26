import React from 'react';
import PageWrapper from './components/PageWrapper';
import Footer from  './components/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import Rooms from './components/Pages/Rooms';
import AboutUs from './components/Pages/AboutUs';
import RoomDetails from './components/Pages/RoomDetails';
import BlogDetails from './components/Pages/BlogDetails';
import News from './components/Pages/News';
import Contact from './components/Pages/Contact';
function App() {
  return (
    <Router>
      <PageWrapper/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/Rooms" component={Rooms}/>
      <Route path="/About-us" component={AboutUs}/>
      <Route path="/Room-Details" component={RoomDetails}/>
      <Route path="/Blog-Details" component={BlogDetails}/>
      <Route path="/News" component={News}/>
      <Route path="/Contact" component={Contact}/>
      <Footer/>
    </Router>
  );
}

export default App;
