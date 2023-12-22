// import logo from './logo.svg';
// import './App.css';
// import Photo from './components/Photo';
// import Gal from './components/Gal';
// import Page from './components/Page'
// import React from 'react';
import Navbar from './components/Navbar';
import Event from './components/Event';
// import LoginPage from './components/LoginPage';
import About from './components/About';
import Contact from './components/Contact'
// import Form from './components/Form';

import{BrowserRouter as Router,Routes,Route} from "react-router-dom";


 function App() {
  return (
    
    
    <>
      {/* <Navbar/> */}
      {/* <Event/> */}

      <Router>
    

       <Navbar/> 
        <Routes>
          <Route path="/" element={< Event/>} />
          {/* <Route path="/Log" element={<LoginPage />} /> */}
          {/* <Route path="/Reg" element={<Form />} /> */}
          <Route path="/Ev" element={<Event/>} />
          <Route path="/Ab" element={<About/>} />
          <Route path="/Contact" element={<Contact/>}/>

      
        
        
        </Routes>


      </Router>


    </>

  )
}
export default App;





