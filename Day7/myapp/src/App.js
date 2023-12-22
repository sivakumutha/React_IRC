// import logo from './logo.svg';
// import './App.css';
// import './Assets/CSS/Dash.css';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <aside class="sidebar">
//   <div id="leftside-navigation" class="nano">
//     <ul class="nano-content">
//       <li>
//         <a href="index.html"><i class="fa fa-dashboard"></i><span>Dashboard</span></a>
//       </li>
//       <li class="sub-menu">
//         <a href="javascript:void(0);"><i class="fa fa-cogs"></i><span>UI Elements</span><i class="arrow fa fa-angle-right pull-right"></i></a>
//         <ul>

//           <li><a href="ui-alerts-notifications.html">Alerts &amp; Notifications</a>
//           </li>
//           <li><a href="ui-panels.html">Panels</a>
//           </li>
//           <li><a href="ui-buttons.html">Buttons</a>
//           </li>
//           <li><a href="ui-slider-progress.html">Sliders &amp; Progress</a>
//           </li>
//           <li><a href="ui-modals-popups.html">Modals &amp; Popups</a>
//           </li>
//           <li><a href="ui-icons.html">Icons</a>
//           </li>
//           <li><a href="ui-grid.html">Grid</a>
//           </li>
//           <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
//           </li>
//           <li><a href="ui-nestable-list.html">Nestable Lists</a>
//           </li>
//         </ul>
//       </li>
//       <li class="sub-menu">
//         <a href="javascript:void(0);"><i class="fa fa-table"></i><span>Tables</span><i class="arrow fa fa-angle-right pull-right"></i></a>
//         <ul>
//           <li><a href="tables-basic.html">Basic Tables</a>
//           </li>

//           <li><a href="tables-data.html">Data Tables</a>
//           </li>
//         </ul>
//       </li>
//       <li class="sub-menu">
//         <a href="javascript:void(0);"><i class="fa fa fa-tasks"></i><span>Forms</span><i class="arrow fa fa-angle-right pull-right"></i></a>
//         <ul>
//           <li><a href="forms-components.html">Components</a>
//           </li>
//           <li><a href="forms-validation.html">Validation</a>
//           </li>
//           <li><a href="forms-mask.html">Mask</a>
//           </li>
//           <li><a href="forms-wizard.html">Wizard</a>
//           </li>
//           <li><a href="forms-multiple-file.html">Multiple File Upload</a>
//           </li>
//           <li><a href="forms-wysiwyg.html">WYSIWYG Editor</a>
//           </li>
//         </ul>
//       </li>
//       <li class="sub-menu active">
//         <a href="javascript:void(0);"><i class="fa fa-envelope"></i><span>Mail</span><i class="arrow fa fa-angle-right pull-right"></i></a>
//         <ul>
//           <li class="active"><a href="mail-inbox.html">Inbox</a>
//           </li>
//           <li><a href="mail-compose.html">Compose Mail</a>
//           </li>
//         </ul>
//       </li>
//       <li class="sub-menu">
//         <a href="javascript:void(0);"><i class="fa fa-bar-chart-o"></i><span>Charts</span><i class="arrow fa fa-angle-right pull-right"></i></a>
//         <ul>
//           <li><a href="charts-chartjs.html">Chartjs</a>
//           </li>
//           <li><a href="charts-morris.html">Morris</a>
//           </li>
//           <li><a href="charts-c3.html">C3 Charts</a></li>
//         </ul>
//       </li>
//       <li class="sub-menu">
//         <a href="javascript:void(0);"><i class="fa fa-map-marker"></i><span>Maps</span><i class="arrow fa fa-angle-right pull-right"></i></a>
//         <ul>
//           <li><a href="map-google.html">Google Map</a>
//           </li>
//           <li><a href="map-vector.html">Vector Map</a>
//           </li>
//         </ul>
//       </li>
//       <li class="sub-menu">
//         <a href="typography.html"><i class="fa fa-text-height"></i><span>Typography</span></a>
//       </li>
//       <li class="sub-menu">
//         <a href="javascript:void(0);"><i class="fa fa-file"></i><span>Pages</span><i class="arrow fa fa-angle-right pull-right"></i></a>
//         <ul>
//           <li><a href="pages-blank.html">Blank Page</a>
//           </li>
//           <li><a href="pages-login.html">Login</a>
//           </li>
//           <li><a href="pages-sign-up.html">Sign Up</a>
//           </li>
//           <li><a href="pages-calendar.html">Calendar</a>
//           </li>
//           <li><a href="pages-timeline.html">Timeline</a>
//           </li>
//           <li><a href="pages-404.html">404</a>
//           </li>
//           <li><a href="pages-500.html">500</a>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   </div>
// </aside>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Dashboard';
import Dashboard from './Components/Navbar';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Switch> */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
