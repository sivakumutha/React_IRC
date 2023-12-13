
// // src/App.js
// import React, { useState } from 'react';
// import EventList from './EventList';
// import AddEventForm from './AddEventForm';
// import './App.css';
// // import './App.css';


// function App() {
//   const [events, setEvents] = useState([]);

//   const addEvent = (newEvent) => {
//     setEvents([...events, newEvent]);
//   };

//   return (
//     <div className="App">
//       <h1>Event Management System</h1>
//       <AddEventForm addEvent={addEvent} />
//       <EventList events={events} />
//     </div>
//   );
// }
  
// export default App;

//  import './Assets/CSS/App.css';

// function App() {
//   return (

//     <>
    
// <section id="gallery">
//   <div class="container">

    /* <!-- Filterable Gallery --> */
//     <ul class="gallery_tabs">
//       <li class="active" data-filter="all">All</li>
//       <li data-filter="camera">birthday party</li>
//       <li data-filter="laptop">DJ</li>
//       <li data-filter="mobile">Wedding</li>
//       <li data-filter="headphone">Meeting Hall</li>
//     </ul>

//     <div class="gallery_wrapper">
//       <div class="gallery_item camera">
//         <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="img"></img>
//       </div>

//       <div class="gallery_item headphone">
//         <img src="https://media.istockphoto.com/id/1399901638/photo/co-workers-make-flower-arrangements-for-the-party.webp?b=1&s=170667a&w=0&k=20&c=bTrPLTXKU2Bvx6t4-OhCrX3czq7jjMpNxQ8d_TytB8E=" alt="img"></img>
//       </div>

//       <div class="gallery_item laptop">
//         <img src="https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img"></img>
//       </div>

//       <div class="gallery_item mobile">
//         <img src="https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="img"></img>
//       </div>

//       <div class="gallery_item laptop">
//         <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="img"></img>
//       </div>

//       <div class="gallery_item camera">
//         <img src="https://images.unsplash.com/photo-1561489396-888724a1543d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="img"></img>
//       </div>

//       <div class="gallery_item headphone">
//         <img src="https://media.istockphoto.com/id/1399901117/photo/co-workers-make-the-party-buffet.webp?b=1&s=170667a&w=0&k=20&c=P_k4ZgJmT9rv7eniS6-tNsQoIIimOoBDAwH16GwbsNY=" alt="img"></img>
//       </div>

//       <div class="gallery_item mobile">
//         <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="img"></img>
//       </div>

//       <div class="gallery_item laptop">
//         <img src="https://images.unsplash.com/photo-1609103254482-dc7beedc47bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="img"></img>
//       </div>

//       <div class="gallery_item headphone">
//         <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="img"></img>
//       </div>

//       <div class="gallery_item mobile">
//         <img src="https://media.istockphoto.com/id/1380516073/photo/female-party-planner-arranging-decorations-for-a-child-birthday-party.webp?b=1&s=170667a&w=0&k=20&c=VZDqiwzsHjP1NXqDB6D3xVsvhrNgEvd6xTmp-VimFGc=" alt="img"></img>
//       </div>

//       <div class="gallery_item camera">
//         <img src="https://images.unsplash.com/photo-1518890569493-668df9a00266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="img"></img>
//       </div>
//     </div>

//     {/* <!-- Lightbox --> */}
//     <div class="lightbox">
//       <div class="lightbox_wrapper">
//         <div class="lightbox_content">
//           <img src="" class="lightbox_img" alt="lightbox-img"></img>
//         </div>
//       </div>
//       <div class="lightbox_close">
//         <span></span>
//         <span></span>
//       </div>
//     </div>
//   </div>
// </section>

//     </>
//   )
// }
// export default App;


import './Assets/CSS/App.css';
// import login from "./Pages/login"
// import {Routes, Routers} from "react-router-dom"
function App() {
    return (
        <>
<div>

<body>
  <div class="container">
    <nav class="nav">
      <ul>
        <li><a href="#" class="logo">
          <img src="./pic/logo.jpg"/>
          <span class="nav-item">Admin</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-menorah"></i>
          <span class="nav-item">Dashboard</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-comment"></i>
          <span class="nav-item">Message</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-database"></i>
          <span class="nav-item">Report</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-chart-bar"></i>
          <span class="nav-item">Attendance</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-cog"></i>
          <span class="nav-item">Setting</span>
        </a></li>
        <li><a href="#" class="logout">
          <i class="fas fa-sign-out-alt"></i>
          <span class="nav-item">Log out</span>
        </a></li>
      </ul>
    </nav>
    
    <ul class="navbar">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">Login</a></li>
    <li><a href="#about">Register</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>

  </div>
</body>

</div>
         
   
   </>  
    
    );
}
export default App;