import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from "react";
import axios from "axios";
import { Varibles } from '../var';
// Import Images
import logo from "../../images/logo.png";

const UPLOAD_ENDPOINT = " http://127.0.0.1:8000/doctor/login";
class FormLogindoctor extends Component {
	state = {
		DoctorPhoneNumber: '',
		DoctorPassword: '',

	}

	handleChange = event => {
		this.setState({ DoctorPhoneNumber: event.target.value });
	}
	handleChange1 = event => {
		this.setState({ DoctorPassword: event.target.value });
	}

	handleSubmit = event => {
		event.preventDefault();
		const DoctorPhoneNumber = this.state.DoctorPhoneNumber;
		const DoctorPassword = this.state.DoctorPassword;

		axios.post(UPLOAD_ENDPOINT, { DoctorPhoneNumber, DoctorPassword })
			.then(function (response) {
				if (response.data !== 0) {

					sessionStorage.setItem("username", response.data['username']);
					sessionStorage.setItem("userID", response.data['userID']);
					sessionStorage.setItem("usertype", "doctor");
					sessionStorage.setItem("Is_login", true);
					//var item_value = sessionStorage.getItem("username");
					//console.log(item_value);
					alert("Sucessfully Login")
					window.location = "/"
				}
				else {
					sessionStorage.removeItem("username");
					sessionStorage.removeItem("usertype");
					sessionStorage.setItem("Is_login", false);
					alert("wrong e-mail or password")
					window.location = "/form-login-doctor"
				}
			}

			)
	}
	render() {

		return (
			<>
				<div className="section-area account-wraper2">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-5 col-lg-6 col-md-8">
								<div className="appointment-form form-wraper">
									<div className="logo">
										<img src={logo} alt="" />
									</div>
									<form onSubmit={this.handleSubmit}>
										<div className="form-group">
											<input type="text" name="Doctoremail" onChange={this.handleChange} className="form-control" placeholder="Phone Number" />
										</div>
										<div className="form-group">
											<input type="password" name="DoctorPassword" onChange={this.handleChange1} className="form-control" placeholder="Password" />
										</div>
										<div className="form-group">
											<button type="submit" className="btn mb-30 btn-lg btn-primary w-100">login</button>
											<Link to="/form-forget-password" data-toggle="tab">Forgot Password</Link>
										</div>
										<div className="text-center mt-40">
											<p className="mt-0">Dont have any account?</p>
											<Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-register-doctor">Register</Link>
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