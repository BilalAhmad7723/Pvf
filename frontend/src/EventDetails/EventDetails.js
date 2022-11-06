import React from 'react'
import ContactInformation from '../ContactUs/ContactInformation'
import Footer from '../Homepage/Footer'
import Navbar from '../Navbar/Navbar'

const EventDetails = () => {
  return (
    <div>
      <Navbar/>

    <div classNameName="page-content bg-white">

 
	<div className="page-banner ovbl-dark bg_img_5">
            <div className="container">
                <div className="page-banner-entry">
                    <h1 className="text-white">Event Details</h1>
				 </div>
            </div>
        </div>

<div className="breadcrumb-row">
    <div className="container">
        <ul className="list-inline">
            <li><a href="#">Home</a></li>
            <li>Event Details</li>
        </ul>
    </div>
    </div>
			<div className="section-area section-sp1">
                <div className="container">
					 <div className="row">
						<div className="col-lg-8 col-md-7 col-sm-12">
							<div className="courses-post">
								<div className="ttr-post-media media-effect">
									<a href="#"><img src="images/blog/default/thum1.jpg" alt=""/></a>
								</div>
								<div className="ttr-post-info">
									<div className="ttr-post-title ">
										<h2 className="post-title">Good Intentions or Good Results?</h2>
									</div>
									<div className="ttr-post-text">
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
								</div>
							</div>
							<div className="courese-overview" id="overview">
								<div className="row">
									<div className="col-md-12 col-lg-5">
										<ul className="course-features">
											<li><i className="ti-book"></i> <span className="label">Topics</span> <span className="value">Web design</span></li>
											<li><i className="ti-help-alt"></i> <span className="label">Host</span> <span className="value">EduChamp</span></li>
											<li><i className="ti-time"></i> <span className="label">Location</span> <span className="value">#45 Road</span></li>
											<li><i className="ti-stats-up"></i> <span className="label">Skill level</span> <span className="value">Beginner</span></li>
											<li><i className="ti-smallcap"></i> <span className="label">Language</span> <span className="value">English</span></li>
											<li><i className="ti-user"></i> <span className="label">Students</span> <span className="value">32</span></li>
											<li><i className="ti-check-box"></i> <span className="label">Assessments</span> <span className="value">Yes</span></li>
										</ul>
									</div>
									<div className="col-md-12 col-lg-7">
										<h5 className="m-b5">Event Description</h5>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
										<h5 className="m-b5">Certification</h5>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
										<h5 className="m-b5">Event Content</h5>
										<ul className="list-checked primary">
											<li>Over 37 lectures and 55.5 hours of content!</li>
											<li>LIVE PROJECT End to End Software Testing Training Included.</li>
											<li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
											<li>Information packed practical training starting from basics to advanced testing techniques.</li>
											<li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
											<li>Course content designed by considering current software testing technology and the job market.</li>
											<li>Practical assignments at the end of every session.</li>
											<li>Practical learning experience with live project work and examples.cv</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-5 col-sm-12 m-b30">
							<div className="purplebg text-white contact-info-bx m-b30">
								<h2 className="m-b10 title-head">Contact <span>Information</span></h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<div className="widget widget_getintuch">	
									<ul>
										<li><i className="ti-location-pin"></i>75k Newcastle St. Ponte Vedra Beach, FL 309382 New York</li>
										<li><i className="ti-mobile"></i>0800-123456 (24/7 Support Line)</li>
										<li><i className="ti-email"></i>info@example.com</li>
									</ul>
								</div>
								<h5 className="m-t0 m-b20">Follow Us</h5>
								<ul className="list-inline contact-social-bx">
									<li><a href="#" className="btn outline radius-xl"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#" className="btn outline radius-xl"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#" className="btn outline radius-xl"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#" className="btn outline radius-xl"><i className="fa fa-google-plus"></i></a></li>
								</ul>
							</div>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch d-flex framestyle" allowfullscreen></iframe>
						</div>
					</div>
				</div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default EventDetails
