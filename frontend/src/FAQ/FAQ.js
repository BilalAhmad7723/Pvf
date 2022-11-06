import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import FAQDropdown from '../testers/FAQDropDown'
import CommentSection from './CommentSection'

const FAQ = () => {
   
  return (
    <div>
  <Navbar/>
        <div className="page-content bg-white">

            <div className="page-banner ovbl-dark bg_img_5">
                <div className="container">
                    <div className="page-banner-entry">
                        <h1 className="text-white">Frequently Asked Questions</h1>
                     </div>
                </div>
            </div>
 
            <div className="breadcrumb-row">
                <div className="container">
                    <ul className="list-inline">
                        <li><a href="#">Home</a></li>
                        <li>Faqs</li>
                    </ul>
                </div>
            </div>
 
            <div className="content-block">
 
                <div className="section-area section-sp1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-bx left">
                                    <h2 className="m-b10 title-head">Asked <span> Questions</span></h2>
                                </div>
                                <p className="m-b10">User Can Ask any question and get reply against his query with FAQ form.</p>
                                <p>Post a Question & Get Reply</p>
                              <FAQDropdown/>
                               <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                        <div className="feature-container">
                                            <div className="feature-md text-white m-b20">
                                                <a href="#" className="icon-cell"><img src="images/icon/icon1.png" alt=""/></a> 
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="ttr-tilte">Our Philosophy</h5>
                                                <p>Make the best of the only time you are going to be applying to universities. Most people only go through this process once in their lifetime. If done right, your dream university awaits you. If you have gained value from my content on YouTube, you know I am the best person to help you with your applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                        <div className="feature-container">
                                            <div className="feature-md text-white m-b20">
                                                <a href="#" className="icon-cell"><img src="images/icon/icon2.png" alt=""/></a> 
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="ttr-tilte">Kingster's Principle</h5>
                                                <p>Rise First step for your bright future</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                        <div className="feature-container">
                                            <div className="feature-md text-white m-b20">
                                                <a href="#" className="icon-cell"><img src="images/icon/icon3.png" alt=""/></a> 
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="ttr-tilte">Key Of Success</h5>
                                                <p>Hard Work is the Key of Success.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          {/* get in touch section */}
                        </div>
                        
                    </div>
                </div>

            </div>

            <CommentSection/>
        </div>
      
        <footer>
            <div className="footer-top">
                <div className="pt-exebar">
                    <div className="container">
                        <div className="d-flex align-items-stretch">
                            <div className="pt-logo mr-auto">
                                <a href="index.html"><img src="images/logo-white.png" alt=""/></a>
                            </div>
                            <div className="pt-social-link">
                                <ul className="list-inline m-a0">
                                    <li><a href="#" className="btn-link"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="btn-link"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="btn-link"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#" className="btn-link"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                            <div className="pt-btn-join">
                                <a href="#" className="btn ">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 footer-col-4">
                            <div className="widget">
                                <h5 className="footer-title">Sign Up For A Newsletter</h5>
                                <p className="text-capitalize m-b20">Weekly Breaking news analysis and cutting edge advices on job searching.</p>
                                <div className="subscribe-form m-b20">
                                    <form className="subscription-form" action="http://educhamp.themetrades.com/demo/assets/script/mailchamp.php" method="post">
                                        <div className="ajax-message"></div>
                                        <div className="input-group">
                                            <input name="email" required="required"  className="form-control" placeholder="Your Email Address" type="email"/>
                                            <span className="input-group-btn">
                                                <button name="submit" value="Submit" type="submit" className="btn"><i className="fa fa-arrow-right"></i></button>
                                            </span> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 col-md-7 col-sm-12">
                            <div className="row">
                                <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                                    <div className="widget footer_widget">
                                        <h5 className="footer-title">Company</h5>
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about-1.html">About</a></li>
                                            <li><a href="faq-1.html">FAQs</a></li>
                                            <li><a href="contact-1.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                                    <div className="widget footer_widget">
                                        <h5 className="footer-title">Get In Touch</h5>
                                        <ul>
                                            <li><a href="http://educhamp.themetrades.com/admin/index.html">Dashboard</a></li>
                                            <li><a href="blog-classNameic-grid.html">Blog</a></li>
                                            <li><a href="portfolio.html">Portfolio</a></li>
                                            <li><a href="event.html">Event</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                                    <div className="widget footer_widget">
                                        <h5 className="footer-title">Courses</h5>
                                        <ul>
                                            <li><a href="courses.html">Courses</a></li>
                                            <li><a href="courses-details.html">Details</a></li>
                                            <li><a href="membership.html">Membership</a></li>
                                            <li><a href="profile.html">Profile</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
                            <div className="widget widget_gallery gallery-grid-4">
                                <h5 className="footer-title">Our Gallery</h5>
                                <ul className="magnific-image">
                                    <li><a href="assets/images/gallery/pic1.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic1.jpg" alt=""/></a></li>
                                    <li><a href="assets/images/gallery/pic2.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic2.jpg" alt=""/></a></li>
                                    <li><a href="assets/images/gallery/pic3.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic3.jpg" alt=""/></a></li>
                                    <li><a href="assets/images/gallery/pic4.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic4.jpg" alt=""/></a></li>
                                    <li><a href="assets/images/gallery/pic5.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic5.jpg" alt=""/></a></li>
                                    <li><a href="assets/images/gallery/pic6.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic6.jpg" alt=""/></a></li>
                                    <li><a href="assets/images/gallery/pic7.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic7.jpg" alt=""/></a></li>
                                    <li><a href="assets/images/gallery/pic8.jpg" className="magnific-anchor"><img src="assets/images/gallery/pic8.jpg" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default FAQ

{/* <div className="col-lg-4 col-md-12">
<form className="contact-bx dzForm" action="http://educhamp.themetrades.com/demo/script/contact.php">
<div className="dzFormMsg"></div>
    <div className="heading-bx left">
        <h2 className="title-head">Get In <span>Touch</span></h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
    </div>
    <div className="row placeani">
        <div className="col-lg-6 ">
            <div className="form-group">
                <div className="input-group">
                    <label>Your Name</label>
                    <input name="dzName" type="text" required className="form-control"/>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="form-group">
                <div className="input-group"> 
                    <label>Your Email Address</label>
                    <input name="dzEmail" type="email" className="form-control" required />
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="form-group">
                <div className="input-group">
                    <label>Your Phone</label>
                    <input name="dzOther[Phone]" type="text" required className="form-control"/>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="form-group">
                <div className="input-group">
                    <label>Subject</label>
                    <input name="dzOther[Subject]" type="text" required className="form-control"/>
                </div>
            </div>
        </div>
        <div className="col-lg-12">
            <div className="form-group">
                <div className="input-group">
                    <label>Type Message</label>
                    <textarea name="dzMessage" rows="4" className="form-control" required ></textarea>
                </div>
            </div>
        </div>
        {/* <div className="col-lg-12">
            <div className="form-group">
                <div className="input-group">
                    <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                    <input className="form-control d-none" style="display:none;" data-recaptcha="true" required data-error="Please complete the Captcha" />
                </div>
            </div>
        </div> 
        <div className="col-lg-12">
            <button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
        </div>
    </div>
</form>
</div> */}