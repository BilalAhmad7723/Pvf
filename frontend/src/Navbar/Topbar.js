import React, { useState } from 'react';
import { Button,Row, Col, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { message } from 'antd';
import Select from 'react-select';
import http from '../Config';
import StripeCheckout from "react-stripe-checkout";
const Topbar = () => {
	const [show, setShow] = useState(false);
	const handleClose_2 = () => setShow(false);
	const handleShow_2 = () => setShow(true);
  const [name, setname] = useState('');
  const [father, setfather] = useState('');
  const [mail, setmail] = useState('');
  const [Doc, setDoc] = useState('');
  const [valueamount, setvalueamount] = useState(0);
  let keydata = 'pk_test_51LyHk5E0hnysYHRDRLDwOeay7LUb49Yn0BrrmKI0Q8xxShmlDohVVQmhXJpQQof4gUrKsypScuasFjeSylf9tCpN00CXXIduJl'
  //const [FormData, setFormData] = useState({name:"",father:"",email:"",Doc:""});
  const timeoptions = [
    { value: '10', label: '1 Hour' },
    { value: '20', label: '2 Hour' },
    { value: '30', label: '3 Hour' }
  ]
	const success = (msg) => {
		message.success(msg);
	  };
	  const error1 = (msg) => {
		message.error(msg);
	  };
    let LoginUSer = JSON.parse(localStorage.getItem('Registered'));
	const onSubmit = () => {
    var options = {
      year: "numeric",
      month: "2-digit",
      day: "numeric"
  };
  setvalueamount(parseInt(valueamount))
  if(name === ''){
    error1("Name must be required");
    return;
   
  }
  if(father === ''){
    error1("Father Name must be required");
    return;
  }
  if(mail === ''){
    error1("Mail must be required");
    return
  }
  if(Doc === ''){
    error1("Date must be required");
    return
  }
  if(valueamount == 0){
    error1("Amount Never be Zero. please Select Time first Amount will be set automatically");
    return
  }
    let data = {
      name: name,
      father:father,
      email:mail,
      amount:valueamount,
      doc:new Date(Doc).toLocaleDateString("en", options)
        }

		http.post('/appointment/book-appointment', data)
     .then((res) => {
	   success(res.data.message);
     handleClose_2();
     }).catch((error) => {
		error1(error.data.message)
       console.log(error)
     })
	  };

    const handleToken = (token) => {
       http.post("payment/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, valueamount }),
      })
      .then(res => res.json())
      .then(_ => {
        success("Transaction Successful.");
        onSubmit()
      }).catch(_ => {
        success("Transaction Successful.")
        onSubmit()
      })
    }
  
    const handleshowhide=(event)=>{
      setvalueamount(event.value)
     }
  
  return (
    <header>
      <div className="top-bar">
			<div className="container">
				<div className="row d-flex justify-content-between">
					<div className="topbar-left">
						<ul>
							<li><Link to="/faq"><i className="fa fa-question-circle"></i>Ask a Question</Link></li>
							<li onClick={handleShow_2}><i className="fa fa-envelope-o"></i>Book An Appointment</li>
						</ul>
					</div>
					<div className="topbar-right">
						<ul>              
						<li>
              <Link to=""><i className="fa fa-user"></i> {(LoginUSer) ? LoginUSer.user : "User"}</Link>
              </li>
							{(LoginUSer == null) ? <li><Link to="/signin">Login</Link></li> : <li><Link to="/signin">Logout</Link></li>}
              {(LoginUSer  == null) ? <li><Link to="/signup">Register</Link></li> : <li><Link to="/"></Link></li>}
							
						</ul>
					</div>
				</div>
			</div>
</div>
<Modal show={show} onHide={handleClose_2}  backdrop="static" keyboard={false}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="appointmentModal">
        <Modal.Body>
		<button type="button" onClick={handleClose_2} className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true"><i className="fa fa-close"></i></span>
    </button>
        <div className="row">
                    <div className="col-12">
                      <h3 style={{color:`#4c1863`,textAlign:  `center`}}>Book your Appoinment Now</h3>
                      <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control data="text" required placeholder="Your Name" onChange={event => setname(event.target.value)}  />
                    </Form.Group>
                    </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="father">
                      <Form.Label>Father Name</Form.Label>
                      <Form.Control type="text" required placeholder="Father Name" onChange={event => setfather(event.target.value)}  />
                    </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" required placeholder="Enter Email"  onChange={event => setmail(event.target.value)} />
                    </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="doc">
                      <Form.Label>Select Date</Form.Label>
                      <Form.Control type="date" required name="doc" placeholder="Date of Appointment" onChange={event => setDoc(event.target.value)} />
                    </Form.Group>
                        </Col>
                      </Row>
                    <Row>
                      <Col>
                      
                    <Form.Group controlId="doc">
                      <Form.Label>Session Time</Form.Label>
                      <Select className='col-6 text-dark'  placeholder="Select Time" onChange={handleshowhide} options={timeoptions} />
                    </Form.Group>
                      </Col>
                      <Col>
                      <Form.Group>
                    <Form.Label>Amount</Form.Label>
                      <Form.Control type="text" required name="amount" disabled={true} value={valueamount} placeholder="Amount"/>
                    </Form.Group></Col>
                    </Row>                   
                    </div>
                </div> 

        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center ">
        <StripeCheckout
          stripeKey={keydata || ""}
          token={handleToken}
          name=""
          panelLabel={`Pay`}
          currency="USD"
          amount={valueamount * 100}
      >
      </StripeCheckout>
        </Modal.Footer>
      </Modal>
      
    </header>
  )
}

export default Topbar;
