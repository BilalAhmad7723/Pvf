import React,{useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import http from '../Config'
import { Empty } from 'antd';
function Blogging() {
    const navigate = useNavigate();
 const [Data, setData] = useState([]);
    useEffect(() => {
        getData();
      }, []);
      const getData = () => {
        const headers = { "Content-Type": "application/json" };
        const endpoint = "blog/get-blog";
        http.get(endpoint, { headers })
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    const OpenDetail = (b) =>{
        navigate('/blogdetail',{state: b});
    }
  return (
    <>
    <Navbar/>
    <div className="page-content bg-white">
    <div className="page-banner ovbl-dark" style={{ backgroundImage: "url(" + require('../assets/images/banner/banner1.jpg') + ")"}}>
        <div className="container">
            <div className="page-banner-entry">
                <h1 className="text-white">Blog Classic</h1>
             </div>
        </div>
    </div>
    <div className="breadcrumb-row">
        <div className="container">
            <ul className="list-inline">
                <li><a href="#">Home</a></li>
                <li>Blog Classic</li>
            </ul>
        </div>
    </div>
    <div className="content-block">
        <div className="section-area section-sp1">
            <div className="container">
                <div className="ttr-blog-grid-3 row" id="masonry">
                    {  Data.length > 0 ? Data.map(element => (  
                          <div className="post action-card col-lg-4 col-md-6 col-sm-12 col-xs-12 m-b40">
                          <div className="recent-news">
                              <div className="action-box">
                                  <img src={require('../assets/images/blog/grid/'+ element.image)} alt="" />
                              </div>
                              <div className="info-bx">
                                  <ul className="media-post">
                                      <li><a href="#"><i className="fa fa-calendar"></i>{element.postDate}</a></li>
                                      <li><a href="#"><i className="fa fa-user"></i>{element.postBy}</a></li>
                                  </ul>
                                  <h5 className="post-title" onClick={() => {OpenDetail(element)}}>{element.title}</h5>
                                  <p>{element.sdetail}</p>
                                  <div className="post-extra">
                                      <a href="#" className="btn-link">READ MORE</a>
                                      <a href="#" className="comments-bx"><i className="fa fa-comments-o"></i>20 Comment</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                        )) : <Empty />
                    }  
                    
                </div>
               
                {/* <div className="pagination-bx rounded-sm gray clearfix">
                    <ul className="pagination">
                        <li className="previous"><a href="#"><i className="ti-arrow-left"></i> Prev</a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li className="next"><a href="#">Next <i className="ti-arrow-right"></i></a></li>
                    </ul>
                </div> */}
              
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

export default Blogging