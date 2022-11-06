import React, { useState, useRef } from "react";
import { Carousel, Button, Container, Row } from "react-bootstrap";

const WhatPeopleSaycarousel = () => {

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
      <div className="button-container">
      <Container>
        <Row className="justify-content-end">
          <Button variant="warning" onClick={onPrevClick}>
          &#60;
          </Button> &nbsp;
          <Button variant="warning" onClick={onNextClick}>
          &#62;
          </Button>
        </Row>
      </Container>
    </div>
{/* <div className="upcoming-event-carousel owl-carousel owl-btn-center-lr owl-btn-1 col-12 p-lr0  m-b30"></div> */}
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
							<div className="testimonial-bx">
								<div className="testimonial-thumb">
									<img src="images/testimonials/pic1.jpg" alt=""/>
								</div>
								<div className="testimonial-info">
									<h5 className="name">Hadiqa</h5>
									<p>-Art Director</p>
								</div>
								<div className="testimonial-content">
									<p>I'll take all Information form Abroad education system to take admissoin in UK. all data provided on a single plat form</p>
								</div>
							</div>
						</div>
        </Carousel.Item>

		<Carousel.Item> 
                        <div className="item">
							<div className="testimonial-bx">
								<div className="testimonial-thumb">
									<img src="images/testimonials/pic2.jpg" alt=""/>
								</div>
								<div className="testimonial-info">
									<h5 className="name">Ali Ameen</h5>
									<p>-BS Software Engineering</p>
								</div>
								<div className="testimonial-content">
									<p>I'll get admission in Australia. Abroad Learning platform helps me alot in all process.</p>
								</div>
							</div>
						</div>
        </Carousel.Item>
        
    </Carousel>

  </>
);
};

export default WhatPeopleSaycarousel
