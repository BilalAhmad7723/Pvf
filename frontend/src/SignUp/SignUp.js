import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {  message } from 'antd';
import http from '../Config';
const SignUp = () => {

	const {register, handleSubmit,reset  } = useForm();

	const success = (msg) => {
		message.success(msg);
	  };
	  const error1 = (msg) => {
		message.error(msg);
	  };

	const onSubmit = (data) => {
		data.status = "false";
		http.post('/student/add-student', data)
     .then((res) => {
	   success(res.data.message);
     }).catch((error) => {
		error1(error.data.message)
       console.log(error)
     })
		reset();
	  };
  return (
    <div className="page-wraper">
	{/* <div id="loading-icon-bx"></div> */}
	<div className="account-form">
		<div className="account-head bg_img_2">
			<Link to="/"><img src="images/logo-white-2.png" alt=""/></Link>
		</div>
		<div className="account-form-inner">
			<div className="account-container">
				<div className="left" style={{marginBottom:'20px'}}>
					<h2 className="title-head">Sign Up <span>Now</span></h2>
					<p>Login Your Account <Link to="/signin">Click here</Link></p>
				</div>	
				<form className="contact-bx" onSubmit={handleSubmit(onSubmit)}>
					<div className="row placeani">
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group">
									<input name="name" placeholder='Your Name' type="text" required className="form-control" {...register("name")}/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group">
									<input name="father" placeholder="Father's Name" type="text" required className="form-control" {...register("father")}/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group">
									<input name="cnic" placeholder='CNIC' type="text" required className="form-control" {...register("cnic")}/>
								</div>
							</div>
						</div>
						<div className=" row col-lg-12">
							<div className="form-group col-lg-6">
								<div className="input-group">
									<input name="email" placeholder='Email Address' type="email" required className="form-control" {...register("email")}/>
								</div>
							</div>
							<div className="form-group col-lg-6">
								<div className="input-group">
									<input name="user" placeholder='User' type="text" required="" className="form-control" {...register("user")}/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group"> 
									<input name="password" placeholder='Password' type="password" className="form-control" required {...register("password")}/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group">
									<input name="education" placeholder='Education' type="text" required className="form-control" {...register("edu")}/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group">
									<input name="Address" placeholder='Address' type="text" required className="form-control" {...register("address")} />
								</div>
							</div>
						</div>
						<div className="col-lg-12 m-b30">
							<button name="submit" type="submit" value="Submit" className="btn bg-light button-md">Sign Up</button>
						</div>
						<div className="col-lg-12">
							<h6>Sign Up with Social media</h6>
							<div className="d-flex">
								<a className="btn flex-fill m-r5 facebook" href="/"><i className="fa fa-facebook"></i>Facebook</a>
								<a className="btn flex-fill m-l5 google-plus" href="/"><i className="fa fa-google-plus"></i>Google Plus</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
  )
}

export default SignUp
