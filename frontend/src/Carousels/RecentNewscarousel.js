import React, { useState, useRef } from "react";
import { Carousel, Button, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'


const RecentNewscarousel = () => {

	const [index, setIndex] = useState(0);
	const ref = useRef(null);
	const handleSelect = (selectedIndex, e) => {
	  setIndex(selectedIndex);
	};
	
	const onPrevClick = () => {
	  ref.current.prev();
	};
	const onNextClick = () => {
	  ref.current.next();
	};

  return (
    <>
	    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      controls={false}
      ref={ref}
      interval={null}
    >
		  <Carousel.Item> 
						<div className="item">
							<div className="recent-news">
								<div className="action-box">
									<img src="images/blog/latest-blog/pic1.jpg" alt=""/>
								</div>
								<div className="info-bx">
									<ul className="media-post">
										<li><Link to="/"><i className="fa fa-calendar"></i>Jan 02 2019</Link></li>
										<li><Link to="/"><i className="fa fa-user"></i>By William</Link></li>
									</ul>
									<h5 className="post-title"><Link to="blog-details.html">This Story Behind Education Will Haunt You Forever.</Link></h5>
									<p>Knowing that, you've optimised your pages countless amount of times, written tons.</p>
									<div className="post-extra">
										<Link to="/" className="btn-link">READ MORE</Link>
										<Link to="/" className="comments-bx"><i className="fa fa-comments-o"></i>20 Comment</Link>
									</div>
								</div>
							</div>
						</div>
			</Carousel.Item>

			<Carousel.Item> 
						<div className="item row">
						<div className="recent-news col-6">
								<div className="action-box">
									<img src="images/blog/latest-blog/pic2.jpg" alt=""/>
								</div>
								<div className="info-bx">
									<ul className="media-post">
										<li><Link to="/"><i className="fa fa-calendar"></i>Feb 05 2019</Link></li>
										<li><Link to="/"><i className="fa fa-user"></i>By John</Link></li>
									</ul>
									<h5 className="post-title"><Link to="blog-details.html">What Will Education Be Like In The Next 50 Years?</Link></h5>
									<p>As desperate as you are right now, you have done everything you can on your.</p>
									<div className="post-extra">
										<Link to="/" className="btn-link">READ MORE</Link>
										<Link to="/" className="comments-bx"><i className="fa fa-comments-o"></i>14 Comment</Link>
									</div>
								</div>
							</div>
							<div className="recent-news col-6">
								<div className="action-box">
									<img src="images/blog/latest-blog/pic2.jpg" alt=""/>
								</div>
								<div className="info-bx">
									<ul className="media-post">
										<li><Link to="/"><i className="fa fa-calendar"></i>Feb 05 2019</Link></li>
										<li><Link to="/"><i className="fa fa-user"></i>By John</Link></li>
									</ul>
									<h5 className="post-title"><Link to="blog-details.html">What Will Education Be Like In The Next 50 Years?</Link></h5>
									<p>As desperate as you are right now, you have done everything you can on your.</p>
									<div className="post-extra">
										<Link to="/" className="btn-link">READ MORE</Link>
										<Link to="/" className="comments-bx"><i className="fa fa-comments-o"></i>14 Comment</Link>
									</div>
								</div>
							</div>
						</div>
			</Carousel.Item>

			<Carousel.Item> 
						<div className="item">
							<div className="recent-news">
								<div className="action-box">
									<img src="images/blog/latest-blog/pic3.jpg" alt=""/>
								</div>
								<div className="info-bx">
									<ul className="media-post">
										<li><Link to="/"><i className="fa fa-calendar"></i>April 14 2019</Link></li>
										<li><Link to="/"><i className="fa fa-user"></i>By George</Link></li>
									</ul>
									<h5 className="post-title"><Link to="blog-details.html">Master The Skills Of Education And Be.</Link></h5>
									<p>You will see in the guide all my years of valuable experience together with.</p>
									<div className="post-extra">
										<Link to="/" className="btn-link">READ MORE</Link>
										<Link to="/" className="comments-bx"><i className="fa fa-comments-o"></i>23 Comment</Link>
									</div>
								</div>
							</div>
						</div>
			</Carousel.Item>
			</Carousel>
	<div className="button-container">
      <Container>
        <Row className="justify-content-center">
          <Button variant="warning" onClick={onPrevClick}>
          &#60;
          </Button> &nbsp;
          <Button variant="warning" onClick={onNextClick}>
          &#62;
          </Button>
        </Row>
      </Container>
    </div>
					
    </>
  )
}

export default RecentNewscarousel
