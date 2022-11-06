import React, { useState, useRef } from "react";
import { Carousel, Button, Container, Row } from "react-bootstrap";


const UpcomingEventcarousel = () => {
  
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
<div className="upcoming-event-carousel owl-carousel owl-btn-center-lr owl-btn-1 col-12 p-lr0  m-b30"></div>
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
							<div className="event-bx">
								<div className="action-box">
									<img src="images/event/pic4.jpg" alt=""/>
								</div>
								<div className="info-bx d-flex">
									<div>
										<div className="event-time">
											<div className="event-date">29</div>
											<div className="event-month">October</div>
										</div>
									</div>
									<div className="event-info">
										<h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
										<ul className="media-post">
											<li><a href="#"><i className="fa fa-clock-o"></i> 7:00am 8:00am</a></li>
											<li><a href="#"><i className="fa fa-map-marker"></i> Berlin, Germany</a></li>
										</ul>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
									</div>
								</div>
							</div>
						</div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="event-bx">
								<div className="action-box">
									<img src="images/event/pic3.jpg" alt=""/>
								</div>
								<div className="info-bx d-flex">
									<div>
										<div className="event-time">
											<div className="event-date">29</div>
											<div className="event-month">October</div>
										</div>
									</div>
									<div className="event-info">
										<h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
										<ul className="media-post">
											<li><a href="#"><i className="fa fa-clock-o"></i> 7:00am 8:00am</a></li>
											<li><a href="#"><i className="fa fa-map-marker"></i> Berlin, Germany</a></li>
										</ul>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
									</div>
								</div>
							</div>
      </Carousel.Item>

      <Carousel.Item>
      <div className="event-bx">
								<div className="action-box">
									<img src="images/event/pic2.jpg" alt=""/>
								</div>
								<div className="info-bx d-flex">
									<div>
										<div className="event-time">
											<div className="event-date">29</div>
											<div className="event-month">October</div>
										</div>
									</div>
									<div className="event-info">
										<h4 className="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
										<ul className="media-post">
											<li><a href="#"><i className="fa fa-clock-o"></i> 7:00am 8:00am</a></li>
											<li><a href="#"><i className="fa fa-map-marker"></i> Berlin, Germany</a></li>
										</ul>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
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
);
};

export default UpcomingEventcarousel

