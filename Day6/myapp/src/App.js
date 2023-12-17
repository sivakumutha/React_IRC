import Contact from './Pages/Contact';
import {Route,Routes} from 'react-router-dom';
import Nav from "./Components/Nav";
// import './App.css';


import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
      

    </Routes>
    </>
  );
}

export default App;
