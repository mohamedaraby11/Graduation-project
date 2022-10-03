import {Component} from 'react';
import { Link } from 'react-router-dom';
// Import Images
import logo from "../../images/logo.png";
import React from "react";
import axios from "axios";
import  { useSelector, useState } from "react";
const UPLOAD_ENDPOINT = "http://127.0.0.1:8000/doctor";


class FormLogindoctor extends Component{
	state = {
		Doctorfullname: '',
		DoctorPhoneNumber:'',
		DoctorAddress:'',
		DoctorCategory:'',
		DoctorNationalID_front:"anonymus.png",
		DoctorNationalID_back:"anonymus.png",
		DoctorPassword:''

		

	}
	
	handleChange = event => {
		this.setState({ Doctorfullname: event.target.value });
				
	}
	handleChange1 = event => {
		
		if (event.target.value.length > 12)
		{
			alert("worng phone number")
			


		}
		else{

			this.setState({ DoctorPhoneNumber: event.target.value });

		}
		
				
	}
	handleChange2 = event => {
		
		this.setState({ DoctorAddress: event.target.value });
		
		
	}
	handleChange3 = event => {
		
		this.setState({ DoctorCategory: event.target.value });
		
		
	}
	handleChange4 = event => {
		
		this.setState({ DoctorPassword: event.target.value });
		
	}

	handleSubmit = event => {
		event.preventDefault();
	
		const Doctorfullname= this.state.Doctorfullname;
		const DoctorAddress= this.state.DoctorAddress;
		const DoctorCategory= this.state.DoctorCategory;
		const DoctorPassword= this.state.DoctorPassword;
		const DoctorNationalID_front= "anomnays.png";
		const DoctorNationalID_back= "anomnays.png";
		const DoctorPhoneNumber= this.state.DoctorPhoneNumber;		
	

	axios.post(UPLOAD_ENDPOINT, { Doctorfullname,DoctorAddress,DoctorCategory,DoctorNationalID_front,DoctorNationalID_back,DoctorPassword,DoctorPhoneNumber })
      .then(function(response)
	  {
		  if(response.data === "Successfully created new account")
		  {
			  alert("Successfully created new account")
			  window.location= "/form-login-doctor" 
		  }
		  else { window.location = "/form-register-doctor"}
	  }
	  
	  )
    }

	render(){
		return (
			<>
				<div className="section-area account-wraper2">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-5 col-lg-6 col-md-8">
								<div className="appointment-form form-wraper">
									<div className="logo">
										<img src={logo} alt=""/>
									</div>
									<form onSubmit={this.handleSubmit}>
										<div className="form-group">
											<input type="text" name="Doctorfullname" className="form-control" onChange={this.handleChange} placeholder="Name"/>
										</div>
										<div className="form-group">
											<input size="12" type="text" name="DoctorPhoneNumber" className="form-control" onChange={this.handleChange1} placeholder="phone number"/>
										</div>
										<div className="form-group">
											<input type="text" name="DoctorAddress" className="form-control" onChange={this.handleChange2} placeholder="Address"/>
										</div>
										<div className="form-group">
											<input type="text" name="DoctorCategory" className="form-control" onChange={this.handleChange3} placeholder="Category"/>
										</div>
										
										<div className="form-group">
											<input type="password" name="DoctorPassword" className="form-control" onChange={this.handleChange4} placeholder="Password"/>
										</div>	
										<div className="form-group">
										<button type='submit' className="btn btn-primary w-100 radius-xl">Register Now</button>
										</div>
										<div className="text-center mt-40">						
											<p className="mt-0">Not A Doctor?</p>
											<Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-register">Rigster As User</Link>
										</div>	
									</form>
								</div>
							</div>
						</div>					
					</div>
				</div>
				
			</>
		);
	}
}

export default FormLogindoctor;