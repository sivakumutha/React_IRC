// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// src/App.js
import React, { useState } from 'react';
import EventList from './Components/EventList/';
import AddEventForm from './Components/AddEventForm';
import './Assets/CSS/App.css';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="App">
      <h1>Event Management System</h1>
      <AddEventForm addEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default App;








