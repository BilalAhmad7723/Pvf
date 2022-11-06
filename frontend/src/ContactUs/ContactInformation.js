import React from 'react'
import { useForm } from "react-hook-form";
import { message } from 'antd';
import http from '../Config';
const ContactInformation = () => {
	const {register, handleSubmit,reset  } = useForm();

	const success = (msg) => {
		message.success(msg);
	  };
	  const error1 = (msg) => {
		
		message.error(msg);
	  };

	const onSubmit = (data) => {
		debugger
		data.status = "false";
		http.post('/contact/add-contact', data)
     .then((res) => {
	   success(res.data.message);
     }).catch((error) => {
		error1(error.data.message)
 
     })
		reset();
	  };
  return (
    <div>
        <div className="page-banner contact-page section-sp2">
            <div className="container">
                <div className="row">
					<div className="col-lg-5 col-md-5 m-b30">
						<div className=" text-white contact-info-bx purplebg">
							<h2 className="m-b10 title-head">Contact <span>Information</span></h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
							<div className="widget widget_getintuch">	
								<ul>
									<li><i className="ti-location-pin"></i>75k Newcastle St. Ponte Vedra Beach, FL 309382 New York</li>
									<li><i className="ti-mobile"></i>0800-123456 (24/7 Support Line)</li>
									<li><i className="ti-email"></i>info@example.com</li>
								</ul>
							</div>
							<h5 className="m-t0 m-b20">Follow Us</h5>
							<ul className="list-inline contact-social-bx">
								<li><a href="www.facebook.com" className="btn outline radius-xl"><i className="fa fa-facebook"></i></a></li>
								<li><a href="https://twitter.com" className="btn outline radius-xl"><i className="fa fa-twitter"></i></a></li>
								<li><a href="https://www.linkedin.com" className="btn outline radius-xl"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="https://myaccount.google.com/" className="btn outline radius-xl"><i className="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
                    <div className="col-lg-7 col-md-7">
						<form className="contact-bx ajax-form"  onSubmit={handleSubmit(onSubmit)}>
						<div className="ajax-message"></div>
							<div className="heading-bx left">
								<h2 className="title-head">Get In <span>Touch</span></h2>
								<p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
							</div>
							<div className="row placeani">
								<div className="col-lg-6">
									<div className="form-group">
										<div className="input-group">
											<input name="name" type="text" placeholder='Name' required className="form-control valid-character" {...register("name")}/>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group">
										<div className="input-group"> 
											<input name="email" type="email" placeholder='Email Address' className="form-control" required {...register("email")}/>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group">
										<div className="input-group">
											<input name="phone" type="text" placeholder='Phone #' required className="form-control int-value" {...register("phone")}/>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group">
										<div className="input-group">
											<input name="subject" type="text" placeholder='Subject' required className="form-control" {...register("subject")}/>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<textarea name="message" placeholder='Type Message Here' rows="4" className="form-control" required {...register("message")}></textarea>
										</div>
									</div>
								</div>
								{/* <div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<div className="g-recaptcha" data-sitekey="6Lf2gYwUAAAAAJLxwnZTvpJqbYFWqVyzE-8BWhVe" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input className="form-control d-none" style="display:none;" data-recaptcha="true" required data-error="Please complete the Captcha"/>
										</div>
									</div>
								</div> */}
								<div className="col-lg-12">
									<button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
            </div>
		</div>
    </div>
  )
}

export default ContactInformation
