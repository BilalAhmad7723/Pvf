import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './modal.css'
import { Link } from 'react-router-dom'
import Footer from '../Homepage/Footer'
import Navbar from '../Navbar/Navbar'
import MembershipDropdown from '../testers/MembershipDropDown'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import http from '../Config';
import StripeCheckout from "react-stripe-checkout";
import { FormControl, InputAdornment, InputLabel, OutlinedInput  } from "@mui/material";

const Membership = () => {
	const [show, setShow] = useState(false);
    const [key, setKey] = useState('home');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	const [ amount, setAmount ] = useState(0);

  const handleToken = (token) => {
    http.post("payment/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, amount }),
    })
    .then(res => res.json())
    .then(_ => {
      window.alert("Transaction Successful.");
    }).catch(_ => window.alert("Transaction Failed."))
  }

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  let keydata = 'pk_test_51LyHk5E0hnysYHRDRLDwOeay7LUb49Yn0BrrmKI0Q8xxShmlDohVVQmhXJpQQof4gUrKsypScuasFjeSylf9tCpN00CXXIduJl'
  return (
    <>

<Navbar/>
    
    {/*  Content --> */}
    <div class="page-content bg-white">
        {/*  inner page banner --> */}
        <div class="page-banner ovbl-dark bg_img_3">
            <div class="container">
                <div class="page-banner-entry">
                    <h1 class="text-white">Membership</h1>
				 </div>
            </div>
        </div>
		{/*  Breadcrumb row --> */}
		<div class="breadcrumb-row">
			<div class="container">
				<ul class="list-inline">
					<li><Link to="">Home</Link></li>
					<li>Membership</li>
				</ul>
			</div>
		</div>
		{/*  Breadcrumb row END --> */}
        {/*  inner page banner END --> */}
		<div class="content-block">
            {/*  About Us --> */}
			<div class="section-area section-sp2">
                <div class="container">
					<div class="row">
						<div class="col-md-12 heading-bx text-center">
							<h2 class="title-head text-uppercase m-b0">Set a plan, start learning and <br/> <span> unlock your potential</span></h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
						</div>
					</div>
					 <div class="pricingtable-row">
						<div class="row">
							<div class="col-sm-12 col-md-4 col-lg-4 m-b40">
								<div class="pricingtable-wrapper">
									<div class="pricingtable-inner">
										<div class="pricingtable-main"> 
											<div class="pricingtable-price"> 
												<span class="priceing-doller">$</span>
												<span class="pricingtable-bx">10</span>
												<span class="pricingtable-type">3 Months</span>
											</div>
											<div class="pricingtable-title ">
												<h2>Standard</h2>
												<p>We are just getting started</p>
											</div>
										</div>
										<ul class="pricingtable-features">
											<li>One Time Fee</li>
											<li>2 Sessions</li>
											<li>Office Hours Availability</li>
											<li>Non Featured</li>
											<li>Fixed Appointments</li>
											<li>Office Hours Support</li>
											
										</ul>
										<div class="pricingtable-footer"> 
											<Button class="btn purplebg text-light radius-xl"  onClick={handleShow}> Get It Now </Button>
										</div>
									</div>
								</div>			
							</div>
							<div class="col-sm-12 col-md-4 col-lg-4 m-b40">
								<div class="pricingtable-wrapper">
									<div class="pricingtable-inner pricingtable-highlight">
										<div class="pricingtable-main"> 
											<div class="pricingtable-price"> 
												<span class="priceing-doller">$</span>
												<span class="pricingtable-bx">15</span>
												<span class="pricingtable-type">6 Months</span>
											</div>
											<div class="pricingtable-title ">
												<h2>Basic</h2>
												<p>The most popular plan</p>
											</div>
										</div>
										<ul class="pricingtable-features">
											<li>One Time Fee</li>
											<li>4 Sessions</li>
											<li>Extended Sessions Available</li>
											<li>Access to Community Events</li>
											<li>Fixed Appointments</li>
											<li>Office Hours Support</li>
											
										</ul>
										<div class="pricingtable-footer"> 
										<Button class="btn purplebg text-light radius-xl"  onClick={handleShow}> Get It Now </Button>
										</div>
									</div>
								</div>
							</div>
							<div class="col-sm-12 col-md-4 col-lg-4 m-b40">
								<div class="pricingtable-wrapper">
									<div class="pricingtable-inner">
										<div class="pricingtable-main"> 
											<div class="pricingtable-price"> 
												<span class="priceing-doller">$</span>
												<span class="pricingtable-bx">20</span>
												<span class="pricingtable-type">12 Months</span>
											</div>
											<div class="pricingtable-title ">
												<h2>Premium</h2>
												<p>Experience the best for e-learning</p>
											</div>
										</div>
										<ul class="pricingtable-features">
											<li>One Time Fee - Save $20</li>
											<li>6 Sessions</li>
											<li>Extended Sessions Available</li>
											<li>Access to Community Events</li>
											<li>Flexible Appointments</li>
											<li>Remote+Office Hours Support</li>
											
										</ul>
										<div class="pricingtable-footer"> 
										<Button class="btn purplebg text-light radius-xl"  onClick={handleShow}> Get It Now </Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
            {/*  Our Services  */}
			<div class="section-area section-sp2 bg-fix ovbl-dark join-bx bg_img" >
                <div class="container">
					<div class="row">
						<div class="col-md-12 text-center heading-bx text-white">
							<h2 class="title-head m-b0">Why Choose <span>Us</span></h2>
							<p class="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
						</div>
						<div class="col-md-6">	
						<MembershipDropdown />
						</div>	
						<div class="col-md-6">	
							<div class="video-bx">
								<img src="images/about/pic1.jpg" alt=""/>
								<Link to="https://www.youtube.com/watch?v=x_sJzVe9P_8" class="popup-youtube video"><i class="fa fa-play"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*  contact area END  */}
		{/*  Our Status  */}
			<div class="section-area content-inner section-sp1">
                <div class="container">
                    <div class="section-content">
                         <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                <div class="counter-style-1">
                                    <div class="text-primary">
										<span class="counter">3000</span><span>+</span>
									</div>
									<span class="counter-text">Completed Projects</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                <div class="counter-style-1">
									<div class="text-black">
										<span class="counter">2500</span><span>+</span>
									</div>
									<span class="counter-text">Happy Clients</span>
								</div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                <div class="counter-style-1">
									<div class="text-primary">
										<span class="counter">1500</span><span>+</span>
									</div>
									<span class="counter-text">Questions Answered</span>
								</div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                <div class="counter-style-1">
									<div class="text-black">
										<span class="counter">1000</span><span>+</span>
									</div>
									<span class="counter-text">Ordered Coffee's</span>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
<Footer/>


<Modal show={show} onHide={handleClose}>
    <div className="row">
        <div className=" mx-auto col-12">
            <div className="card ">
                <div className="card-header">
                    
                    <Tabs 
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      classNameName="mb-3" >
      <Tab eventKey="home" title="Credit Card" >
	  <FormControl sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
            id="outlined-adornment-amount"
            value={amount}
            onChange={handleAmountChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
        />    
    </FormControl> 
      <StripeCheckout
          stripeKey={keydata || ""}
          token={handleToken}
          name=""
          panelLabel={`Pay`}
          currency="USD"
          amount={amount * 100}
      >
         
      </StripeCheckout>
      {/* <div id="credit-card" className="tab-pane fade show active pt-3">
		
                            <Form role="form" onsubmit="event.preventDefault()">
                                <div className="form-group"> <label for="username">
                                        <h6>Card Owner</h6>
                                    </label> <input type="text" name="username" placeholder="Card Owner Name" required className="form-control "/> </div>
                                <div className="form-group"> <label for="cardNumber">
                                        <h6>Card number</h6>
                                    </label>
                                    <div className="input-group"> <input type="text" name="cardNumber" placeholder="Valid card number" className="form-control " required/>
                                        <div className="input-group-append"> <span className="input-group-text text-muted"> <i className="	fa fa-cc-visa mx-1"></i> <i className="fa fa-cc-mastercard mx-1"></i> <i className="fa fa-credit-card"></i> </span> </div>
                                    </div>
                                </div>

								
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group"> <label><span className="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                </span></label>
                                            <div className="input-group"> <input type="number" placeholder="MM" name="" className="form-control" required/> <input type="number" placeholder="YY" name="" className="form-control" required/> </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                <h6 className='mt-4'>CVV </h6>
                                            </label> <input type="text" required className="form-control"/> </div>
                                    </div>
                                </div>
                                <div className="card-footer"> 
                                <button type="button" className="subscribe btn purplebg text-light btn-block shadow-sm"> Confirm Payment </button>
                            </div>
                        </Form>
                        
                    </div> */}
      </Tab>
      <Tab eventKey="profile" title="Bank Transfer">
      <div id="net-banking" className="tab-pane pt-3">
                        <div className="form-group "> <label for="Select Your Bank">
                                <h6>Select your Bank</h6>
                            </label> <select className="form-control" id="ccmonth">
                                <option value="" selected disabled>--Please select your Bank--</option>
                                <option>Bank 1</option>
                                <option>Bank 2</option>
                                <option>Bank 3</option>
                                <option>Bank 4</option>
                                <option>Bank 5</option>
                                <option>Bank 6</option>
                                <option>Bank 7</option>
                                <option>Bank 8</option>
                                <option>Bank 9</option>
                                <option>Bank 10</option>
                            </select> </div>
                        <div className="form-group">
                            <p> <button type="button" className="btn purplebg text-light"><i className="fas fa-mobile-alt mr-2"></i> Proceed Payment</button> </p>
                        </div>
                        <p className="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                    </div>
      </Tab>
      <Tab eventKey="contact" title="Paypal" >
       
      <div id="paypal" className="pt-3">
                        <h6 className="pb-2">Select your paypal account type</h6>
                        <div className="form-group "> <label className="radio-inline"> <input type="radio" name="optradio" checked/> Domestic </label> <label className="radio-inline"> <input type="radio" name="optradio" className="ml-5"/>International </label></div>
                        <p> <button type="button" className="btn purplebg text-light"><i className="fa fa-paypal mr-2"></i> Log into my Paypal</button> </p>
                        <p className="text-muted"> Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                    </div> 
      </Tab>
    </Tabs>


            
                </div>
            </div>
        </div>
    </div>
</Modal>
</>
  )
}

export default Membership
