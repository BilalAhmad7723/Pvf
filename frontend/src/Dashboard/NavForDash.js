import React from 'react'
import { Link } from 'react-router-dom'
import FinalSideNav from '../SIDENAV/NAVBAR'


const NavForDash = () => {
  return (
    <header className=" rs-nav  ">
      <div className="sticky-header navbar-expand-lg purplebg">
            <div className="menu-bar clearfix">
                <div className="container clearfix">

					<div className="menu-logo">
						<Link to="/"><img src="images/logo-white.png" alt=''/></Link>
					</div> 
                

                    <div className="menu-links navbar-collapse collapse justify-content-start" id="menuDropdown">
						<div className="menu-logo">
							<Link to="index.html"><img src="assets/images/logo.png" alt=""/></Link>
						</div>
                        <ul className="nav navbar-nav">	
							<li className="active"><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/dashboard/countries" >Country</Link></li>
							<li><Link to="/dashboard/universities" >Universities</Link></li>
							<li><Link to="/dashboard/students">Students</Link></li>
							<li><Link to="/dashboard/faqs">FAQ's </Link></li>
							<li><Link to="/dashboard/blogs">Blog</Link></li>
							<li><Link to="/dashboard/appointments">Appointments</Link></li>
 
							</ul>

                        
                    </div>
                    {/* <CollapsableExample/> */}
                    
                </div>
            </div>
        </div>
        
    </header>

  )
}

export default NavForDash
