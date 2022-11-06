import React from 'react'
import { Link } from 'react-router-dom'
import FinalSideNav from '../SIDENAV/NAVBAR'


const MainContentsbar = () => {
  return (
    <header className="header rs-nav header-transparent">
      <div className="sticky-header navbar-expand-lg">
            <div className="menu-bar clearfix">
                <div className="container clearfix">

					<div className="menu-logo">
						<Link to="/"><img src="images/logo-white.png" alt=''/></Link>
					</div> 
                
                    {/* <button class="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button> */}

                    
                    <div className="secondary-menu">
                        <div className="secondary-inner">
                            <ul>
								<li><Link to="/" className="btn-link"><i className="fa fa-facebook"></i></Link></li>
								<li><Link to="/" className="btn-link"><i className="fa fa-google-plus"></i></Link></li>
								<li><Link to="/" className="btn-link"><i className="fa fa-linkedin"></i></Link></li>

								<li className="search-btn"><button id="quik-search-btn" type="button" className="btn-link"><i className="fa fa-search"></i></button></li>
                                <li> <FinalSideNav/></li>
                               
							</ul>
						</div>
                    </div>

                    <div className="nav-search-bar">
                        <form action="#">
                            <input name="search" value="" type="text" className="form-control" placeholder="Type to search" />
                            <span><i className="ti-search"></i></span>
                        </form>
						<span id="search-remove"><i className="ti-close"></i></span>
                    </div>
				
                    <div className="menu-links navbar-collapse collapse justify-content-start" id="menuDropdown">
						<div className="menu-logo">
							<Link to="index.html"><img src="assets/images/logo.png" alt=""/></Link>
						</div>
                        <ul className="nav navbar-nav">	
							<li className="active"><Link to="/">Home </Link></li>

									<li><Link to="/aboutus">About Us</Link></li>
									{/* <li><Link to="/events">Events</Link></li> */}
									<li><Link to="/faq">FAQ's </Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
									<li><Link to="/contactus">Contact Us</Link></li>
									<li><Link to="/membership">Membership</Link></li>
                                    <li><Link to="/document">Document</Link></li>
 
							</ul>
                        
                    </div>
                    {/* <CollapsableExample/> */}
                    
                </div>
            </div>
        </div>
        
    </header>

  )
}

export default MainContentsbar
