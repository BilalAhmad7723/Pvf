import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FAQDropdown = () => {
  return (
    <div>
      <Accordion class="col-md-6 why-chooses-bx panel">
<div className='bg-dark'>
      <Accordion.Item eventKey="0" flush className='col-12'>
          <Accordion.Header >	<h6>Why won't my payment go through?</h6></Accordion.Header>
          <Accordion.Body >
             <p className='text-light'>Web design aorem apsum dolor sit amet, adipiscing elit,
              sed diam nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat.</p> 
          </Accordion.Body>
      </Accordion.Item>
</div>
<div className='bg-dark'>
      <Accordion.Item eventKey="1" flush className='col-12'>
          <Accordion.Header >	<h6>How do I get a refund?</h6></Accordion.Header>
          <Accordion.Body >
           <p className='text-light'> Graphic design aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
         
          </Accordion.Body>
      </Accordion.Item>
      </div>
<div className='bg-dark'>
      <Accordion.Item eventKey="2" className='col-12'>
        <Accordion.Header><h6>How do I redeem a coupon? </h6></Accordion.Header>
        <Accordion.Body>
        <p className='text-light'>
        Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p></Accordion.Body>
      </Accordion.Item>
      </div>
<div className='bg-dark'>
      <Accordion.Item eventKey="3" className='col-12'>
        <Accordion.Header><h6>Why aren't my courses showing in my account? </h6></Accordion.Header>
        <Accordion.Body>
        <p className='text-light'>
        Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p></Accordion.Body>
      </Accordion.Item>
      </div>
<div className='bg-dark'>
      <Accordion.Item eventKey="4" className='col-12'>
        <Accordion.Header><h6>Changing account name  </h6></Accordion.Header>
        <Accordion.Body>
        <p className='text-light'>
        Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p></Accordion.Body>
      </Accordion.Item>
      </div>
<div className='bg-dark'>
      <Accordion.Item eventKey="5" className='col-12'>
        <Accordion.Header><h6>Why aren't my courses showing in my account? </h6></Accordion.Header>
        <Accordion.Body>
        <p className='text-light'>
        Developement aorem apsum dolor sit amet, adipiscing elit, sed diam nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p></Accordion.Body>
      </Accordion.Item>
      </div>
    </Accordion>
    </div>
  )
}

export default FAQDropdown
