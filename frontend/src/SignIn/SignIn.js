import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { message } from 'antd';
import http from '../Config';
const SignIn = () => {
	const navigation = useNavigate();
	const {register, handleSubmit,reset  } = useForm();
	const success = (msg) => {
		message.success(msg);
	  };
	  const error1 = (msg) => {
		message.error(msg);
	  };
	  localStorage.removeItem('Registered');
	  const onSubmit = (data) => {
		http.post('student/get-auth', data).then((res) => {
	   success(res.data.message);
	   localStorage.setItem("Registered", JSON.stringify(res.data.data));
	   navigation('/');
     }).catch((error) => {
		error1(error.data.message);
     })
		reset();
	  };
  return (
    <>
<div className="page-wraper">
	{/* <div id="loading-icon-bx"></div> */}
	<div className="account-form">
		<div className="account-head bg_img">
		<Link to="/"><img  src="images/logo-white-2.png" alt=""/></Link>
		</div>
        <div className="account-form-inner">
			<div className="account-container">
				<div className="heading-bx left">
					<h2 className="title-head">Login to your <span>Account</span></h2>
					<p>Don't have an account? <Link to="/signup">Create one here</Link></p>
				</div>	
                <form className="contact-bx" onSubmit={handleSubmit(onSubmit)}>
					<div className="row placeani">
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group">
									<input name="dzName" type="text" placeholder='User Name' autoComplete='off' required className="form-control" {...register("user")}/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group">
								<div className="input-group"> 
									<input name="dzEmail" type="password" autoComplete='off' placeholder='Password' className="form-control" required {...register("password")}/>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="form-group form-forget">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
									<label className="custom-control-label" htmlFor="customControlAutosizing">Remember me</label>
								</div>
								<Link className="ml-auto">Forgot Password?</Link>
							</div>
						</div>
						<div className="col-lg-12 m-b30">
							<button name="submit" type="submit" value="Submit" className="btn button-md">Login</button>
						</div>
						<div className="col-lg-12">
							<h6>Login with Social media</h6>
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
</>

  )
}

export default SignIn
