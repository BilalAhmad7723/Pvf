import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Slidingcarousel = () => {
  return ( 
    <Carousel variant="light">
        
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="images/slider/slide1.jpg"
          data-bgposition="center center" 
          data-bgfit="cover" 
          data-bgrepeat="no-repeat" 
          data-bgparallax="10" 
          class="rev-slidebg" 
          alt="First slide"
        />
        <Carousel.Caption className='responsivetext'>
          <figure className='position-relative'>
          <h5 style={{color: `white`}}>Better Eduaction for a Better Future</h5>
          <h2 style={{color: `white`}}>Welcome To University</h2>
          <h5 style={{color: `white`}}>Find University For Your Best Future</h5>
          <Link to="/contactus">
         <button type="button" class="btn btn-outline-light btntxt">  CONTACT US </button> </Link>
         <Link to="/contactus">
         <button type="button" class="btn btn-primary btntxt">READ MORE</button> </Link>
      </figure>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Card>
      <Card.Img variant="top"  src="images/slider/slide2.jpg" 
                        data-bgposition="center center" 
                        data-bgfit="cover" 
                        data-bgrepeat="no-repeat" 
                        data-bgparallax="10" 
                        class="rev-slidebg" 
                        data-no-retina alt="Second slide" /> 
      <Carousel.Caption className='responsivetext'>
      <figure className='position-relative'>
          <h5 style={{color: `white`}}>Find Best Match According to Need</h5>
          <h2 style={{color: `white`}}>Welcome To Abroad Education System</h2>
          <Link to="/contactus">
         <button type="button" class="btn btn-outline-light btntxt">  CONTACT US </button> </Link>
         <Link to="/contactus">
         <button type="button" class="btn btn-primary btntxt">READ MORE</button> </Link>
          </figure>
        </Carousel.Caption>
         </Card>
      </Carousel.Item>

      <Carousel.Item>
      <Card>
      <Card.Img variant="top"  src="images/about/pic1.jpg" 
                        data-bgposition="center center" 
                        data-bgfit="cover" 
                        data-bgrepeat="no-repeat" 
                        data-bgparallax="10" 
                        class="rev-slidebg" 
                        data-no-retina alt="Second slide" /> 
      <Carousel.Caption className='responsivetext'>
      <figure className='position-relative'>
          <h5 style={{color: `white`}}>Better Eduaction for a better future</h5>
          <h2 style={{color: `white`}}>Welcome To University</h2>
          <Link to="/contactus">
         <button type="button" class="btn btn-outline-light btntxt">  CONTACT US </button> </Link>
         <Link to="/contactus">
         <button type="button" class="btn btn-primary btntxt">READ MORE</button> </Link>
          </figure>
        </Carousel.Caption>
         </Card>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slidingcarousel
