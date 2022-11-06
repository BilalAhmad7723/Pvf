import React from 'react'
import {useLocation} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
function Blogdetails() {
    const {state} = useLocation();
    debugger;
const { id, image,title,postDate,PostBy,sdetail,ldetail } = state;
  return (
   <>
    <Navbar/>
       <div className="page-content bg-white">
        <div className="page-banner ovbl-dark" style={{ backgroundImage: "url(" + require('../assets/images/banner/banner2.jpg') + ")"}}>
            <div className="container">
                <div className="page-banner-entry">
                    <h1 className="text-white">Blog Details</h1>
				</div>
            </div>
        </div>
		<div className="breadcrumb-row">
			<div className="container">
				<ul className="list-inline">
					<li><a href="#">Home</a></li>
					<li>Blog Details</li>
				</ul>
			</div>
		</div>
        <div className="content-block">
			<div className="section-area section-sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-xl-12">
							<div className="recent-news blog-lg">
								<div className="action-box blog-lg">
									<img src={require('../assets/images/blog/grid/' + image)} alt="" />
								</div>
								<div className="info-bx">
									<ul className="media-post">
										<li><a href="#"><i className="fa fa-calendar"></i>{postDate}</a></li>
										<li><a href="#"><i className="fa fa-comments-o"></i>10 Comment</a></li>
									</ul>
									<h5 className="post-title"><a href="#">{title}</a></h5>
									<p>{ldetail}</p>
									<div className="ttr-divider bg-gray"><i className="icon-dot c-square"></i></div>
								</div>
							</div>
							{/* <div className="clear" id="comment-list">
								<div className="comments-area" id="comments">
									<h2 className="comments-title">8 Comments</h2>
									<div className="clearfix m-b20">
										<ol className="comment-list">
											<li className="comment">
												<div className="comment-body">
													<div className="comment-author vcard"> <img  className="avatar photo"  src={require('../assets/images/testimonials/pic1.jpg')} alt="" /> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
													<div className="comment-meta"> <a href="#">December 02, 2019 at 10:45 am</a> </div>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
														Nam vitae neque vitae sapien malesuada aliquet. </p>
													<div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
												</div>
												<ol className="children">
													<li className="comment odd parent">
														<div className="comment-body">
															<div className="comment-author vcard"> <img  className="avatar photo" src={require('../assets/images/testimonials/pic2.jpg')} alt="" /> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
															<div className="comment-meta"> <a href="#">December 02, 2019 at 10:45 am</a> </div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																ac elementum ligula blandit ac.</p>
															<div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
														</div>
													</li>
												</ol>
											</li>
											<li className="comment">
												<div className="comment-body">
													<div className="comment-author vcard"> <img  className="avatar photo" src={require('../assets/images/testimonials/pic3.jpg')} alt="" /  > <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
													<div className="comment-meta"> <a href="#">December 02, 2019 at 10:45 am</a> </div>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
														In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
														ac elementum ligula blandit ac.</p>
													<div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
												</div>
                                                <ol className="children">
													<li className="comment odd parent">
														<div className="comment-body">
															<div className="comment-author vcard"> <img  className="avatar photo" src={require('../assets/images/testimonials/pic2.jpg')} alt="" /> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
															<div className="comment-meta"> <a href="#">December 02, 2019 at 10:45 am</a> </div>
															<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																ac elementum ligula blandit ac.</p>
															<div className="reply"> <a href="#" className="comment-reply-link">Reply</a> </div>
														</div>
													</li>
												</ol>
											</li>
										</ol>
										<div className="comment-respond" id="respond">
											<h4 className="comment-reply-title" id="reply-title">Leave a Reply <small> <a style={{display:`none`}} href="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h4>
											<form className="comment-form" id="commentform" method="post">
												<p className="comment-form-author">
													<label for="author">Name <span className="required">*</span></label>
													<input type="text" value="" name="Author"  placeholder="Author" id="author" />
												</p>
												<p className="comment-form-email">
													<label for="email">Email <span className="required">*</span></label>
													<input type="text" value="" placeholder="Email" name="email" id="email" />
												</p>
												<p className="comment-form-url">
													<label for="url">Website</label>
													<input type="text"  value=""  placeholder="Website"  name="url" id="url" / >
												</p>
												<p className="comment-form-comment">
													<label for="comment">Comment</label>
													<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
												</p>
												<p className="form-submit">
													<input type="submit" value="Submit Comment" className="submit" id="submit" name="submit" />
												</p>
											</form>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
        </div>
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
   </>
  )
}

export default Blogdetails