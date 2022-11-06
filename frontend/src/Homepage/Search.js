import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import http from '../Config';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Search = () => {
	const [selectedOption, setSelectedOption] = useState([]);
	const [universities, setuniversities] = useState([]);
	const [countries, setcountries] = useState([]);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [data, setData] = useState({});

	useEffect(() => {
		getData();
		getCountryData()
	  }, []);
	 
	  const getData = () => {
		const headers = { "Content-Type": "application/json" };
		const endpoint = "/uni/get-university";
		http.get(endpoint, { headers })
		  .then((response) => {
			setuniversities( response.data)
		  })
		  .catch((error) => {
			console.log(error);
		  });
	  };

	  const getCountryData = () => {
		const headers = { "Content-Type": "application/json" };
		const endpoint = "/uni/get-country";
		http.get(endpoint, { headers })
		  .then((response) => {
			setcountries( response.data)
		  })
		  .catch((error) => {
			console.log(error);
		  });
	  };
	
	const handleshowhide=(event)=>{
	  let arr = [];
	  universities.forEach(element => {
		if(element.code === event.code){
			element.label = element.name;
			element.value = element.name;
		  arr.push(element)
		}
	  });
	  console.log(arr);
	  setSelectedOption(arr);
	 }

	 const handleDatashow=(event)=>{
		console.log(event);
		setData(event)
		handleShow();
	   }
	  
  return (
	<>
		<div className="section-area section-sp1 ovpr-dark bg-fix online-cours bg-img">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center text-white">
							<h2>Get Universities Information</h2>
							<h5>Own Abroad learning</h5>
							<div className="App row ">
							<Select className='col-6 text-dark' placeholder="Select Country" onChange={handleshowhide} options={countries} />
        					<Select className='col-6 text-dark' placeholder="Select University"  onChange={handleDatashow} options={selectedOption} />
							</div>
						</div>
					</div>
					<div className="mw800 m-auto">
						<div className="row">
							<div className="col-md-4 col-sm-6">
								<div className="cours-search-bx m-b30">
									<div className="icon-box">
										<h3><i className="ti-user"></i><span className="counter">5</span>M</h3>
									</div>
									<span className="cours-search-text">Over 5 million student</span>
								</div>
							</div>
							<div className="col-md-4 col-sm-6">
								<div className="cours-search-bx m-b30">
									<div className="icon-box">
										<h3><i className="ti-book"></i><span className="counter">30</span>K</h3>
									</div>
									<span className="cours-search-text">30,000 Courses.</span>
								</div>
							</div>
							<div className="col-md-4 col-sm-12">
								<div className="cours-search-bx m-b30">
									<div className="icon-box">
										<h3><i className="ti-layout-list-post"></i><span className="counter">20</span>K</h3>
									</div>
									<span className="cours-search-text">Learn Anythink Online.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
	     </div>
		 {data.name ? 
				 <Modal show={show} size="lg" aria-labelledby="example-modal-sizes-title-lg" onHide={handleClose} backdrop="static" keyboard={false} >
				 <Modal.Header>
				   <Modal.Title style={{textAlign:`center`}}>University Information</Modal.Title>
				 </Modal.Header>
				 <Modal.Body>
				 <div className="content-block">
					 <div className="section-area">
						 <div className="container">
							  <div className="row">
								 <div className="col-lg-12 col-md-7 col-sm-12">
									 <div className=" row courses-post">
										 <div className="col-lg-6 ttr-post-media media-effect">
											 <a href="#"><img style={{width:`250px`, height:`200px`}} src={require('../assets/images/unilogo/'+ data.logo)} alt="" /></a>
										 </div>
										 <div className=" col-lg-6 ttr-post-info">
											 <div className="ttr-post-title ">
												 <h2 className="post-title" style={{color:` #3f189a`}}> {data.name}</h2>
											 </div>
											 <div className="ttr-post-text">
												 <p style={{color:` #3f189a`}}> {data.address}</p>
											 </div>
										 </div>
									 </div>
									 <div className="courese-overview" id="overview">
										 <div className="row">
											 <div className="col-md-12 col-lg-12">
												 <ul className="course-features">
													 <li><i className="ti-book"></i> <span className="label">Tution Fee</span> <span className="value">{data.tuition}</span></li>
													 <li><i className="ti-help-alt"></i> <span className="label">T.Students</span> <span className="value">{data.total_students}</span></li>
													 <li><i className="ti-time"></i> <span className="label">Web URL</span> <span className="value"><a href={data.url} style={{color:` #3f189a`}}>{data.url}</a></span></li>
													 <li><i className="ti-stats-up"></i> <span className="label">Rank</span> <span className="value">{data.rank}</span></li>
													 <li><i className="ti-smallcap"></i> <span className="label">Required CGPA</span> <span className="value">{data.gpa}</span></li>
													 <li><i className="ti-user"></i> <span className="label">Living Expense</span> <span className="value">{data.living_expenses}</span></li>
													 <li><i className="ti-check-box"></i> <span className="label">Country</span> <span className="value">{data.country_name}</span></li>
												 </ul>
											 </div>
											 {/* <div className="col-md-12 col-lg-7">
												 <h5 className="m-b5">Event Description</h5>
												 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
												 <h5 className="m-b5">Certification</h5>
												 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
												 <h5 className="m-b5">Event Content</h5>
												 <ul className="list-checked primary">
													 <li>Over 37 lectures and 55.5 hours of content!</li>
													 <li>LIVE PROJECT End to End Software Testing Training Included.</li>
													 <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
													 <li>Information packed practical training starting from basics to advanced testing techniques.</li>
													 <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
													 <li>Course content designed by considering current software testing technology and the job market.</li>
													 <li>Practical assignments at the end of every session.</li>
													 <li>Practical learning experience with live project work and examples.cv</li>
												 </ul>
											 </div> */}
										 </div>
									 </div>
								 </div>
							 </div>
						 </div>
					 </div>
				 </div>
				 {/* <Table striped responsive bordered hover size="sm">
					 <thead>
						 <tr>
							  <th>Name</th>
							  <th>Tution Fee</th>
							  <th>T.Students</th>
							  <th>Web URL</th>
							  <th>Rank</th>
							  <th>Required CGPA</th>
							  <th>Living Expense</th>
							  <th>Country</th>
							  <th>Address</th>
						 </tr>
					 </thead>
					 <tbody>
						 <tr>
						 <td>{data.name}</td>
						 <td>{data.tuition}</td>
						 <td>{data.total_students}</td>
						 <td>{data.url}</td>
						 <td>{data.rank}</td>
						 <td>{data.gpa}</td>
						 <td>{data.living_expenses}</td>
						 <td>{data.country_name}</td>
						 <td>{data.address}</td>
						 </tr>
					 </tbody>
					 </Table> */}
				 </Modal.Body>
				 <Modal.Footer>
				   <Button variant="secondary" onClick={handleClose}>
					 Close
				   </Button>
				 </Modal.Footer>
				   </Modal> : <></> 
		}


	</>
  )
}

export default Search
