import '../Assets/css/nav.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/Log" className="nav-link">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link to="/Reg" className="nav-link">REGISTER</Link>
        </li>
        <li className="nav-item">
          <Link to="/Ab" className="nav-link">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">CONTACT</Link>
        </li>
       
      </ul>
    </nav>



  <div class="area"></div>
  <nav class="main-menu">
    <ul>
      <li>
        <a href="https://jbfarrow.com">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">
            Community Dashboard
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-globe fa-2x"></i>
          <span class="nav-text">
           <Link to="/Services" className="nav-link">Bus Services</Link>
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-comments fa-2x"></i>
          <span class="nav-text">
           <Link to="/Services1" className="nav-link">Group Hub Forums</Link>
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-camera-retro fa-2x"></i>
          <span class="nav-text">
          <Link to="/poem" className="nav-link">poem</Link>
          </span>
        </a>

      </li>
      <li>
        <a href="#">
          <i class="fa fa-film fa-2x"></i>
          <span class="nav-text">
            Surveying Tutorials
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-book fa-2x"></i>
          <span class="nav-text">
            Surveying Jobs
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-cogs fa-2x"></i>
          <span class="nav-text">
            Tools & Resources
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-map-marker fa-2x"></i>
          <span class="nav-text">
            Member Map
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-info fa-2x"></i>
          <span class="nav-text">
            Documentation
          </span>
        </a>
      </li>
    </ul>

    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
            Logout
          </span>
        </a>
      </li>
    </ul>
  </nav>




</>
  )
}

export default Navbar;

// import { Component } from "react";

// import "./NavbarStyles.css";




// class Navbar extends Component
// {

//     state={clicked: false };
//     handleClick = () =>
//     {
//         this.setState({clicked: !this.state.clicked})
//     }

//     render()
//     {
//     return(
//         <>
//            <nav>
//             <a href="index.html">
//             <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path> </svg>
           
            
//             {/* <img src="https://icons8.com/icon/6tZtPMDJ7Sk1/confetti"></img> */}
           
//             </a>
        
//             <div>
//                 <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
//                     <li><a  className="active" href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c2fe9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg> Login</a></li>
//                     <li><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c2fe9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-theater"><path d="M2 10s3-3 3-8"/><path d="M22 10s-3-3-3-8"/><path d="M10 2c0 4.4-3.6 8-8 8"/><path d="M14 2c0 4.4 3.6 8 8 8"/><path d="M2 10s2 2 2 5"/><path d="M22 10s-2 2-2 5"/><path d="M8 15h8"/><path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/><path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/></svg>  Events</a></li>
//                     <li><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c2fe9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-check"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="m9 9.5 2 2 4-4"/></svg>   Register</a></li>
//                     <li><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c2fe9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> About</a></li>f 
//                     <li><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8c2fe9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg> Contact</a></li>
//                 </ul>
//             </div>


{/* 
            <div id="mobile">
                 <i className="fas fa-bars"></i>
            </div>

            <div id="mobile">
                 <i className="fas fa-times"></i>
            </div> */}



        //     <div id="mobile" onClick={this.handleClick}>
        //         <i id="bar" className={this.state.clicked ?
        //         'fas fa-times' : 'fas fa-bars'}></i>
        //     </div>
        //    </nav>



        //    <div className="back">
                {/* <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D"></img> */}

                {/* <img src="https://content.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg?clr="></img> */}

//                 <img src="https://content.jdmagicbox.com/comp/mumbai/l7/022pxx22.xx22.110719211443.w5l7/catalogue/vilona-entertainment-kandivali-west-mumbai-event-organisers-xbfcae.jpg?clr="></img>
         
//            </div>
//         </>
//     )
//                 }
// }
// export default Navbar;

  