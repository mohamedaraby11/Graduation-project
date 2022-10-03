import { Component } from 'react';
import { Link } from 'react-router-dom';
// Import Images
import logo from "../../images/logo.png";
import React from "react";
import axios from "axios";
import { useSelector, useState } from "react";
const UPLOAD_ENDPOINT = " http://127.0.0.1:8000/clint";


class FormLogin extends Component {
	state = {
		Userfullname: '',
		UserId: '',
		Useremail: '',
		Userage: '',
		Usergender: '',
		UserPhoneNumber: '',
		UserAddress: '',
		UserPassword: '',
		UserProfile: "anonymus.png",
		backgroundColor: "#f4f4f7"



	}

	handleChange = event => {
		this.setState({ Userfullname: event.target.value });


	}
	handleChange1 = event => {
		this.setState({ UserId: event.target.value });
	}
	handleChange2 = event => {
		this.setState({ Useremail: event.target.value });
	}
	handleChange3 = event => {
		if (event.target.value >= 100) {
			alert("please enter a Real AGE !!!!!!!")

		}
		else {
			this.setState({ Userage: event.target.value });

		}

	}
	onDropdownSelected2 = event => {
		this.setState({ Usergender: event.target.value });
	}
	handleChange5 = event => {
		this.setState({ UserPhoneNumber: event.target.value });
	}
	handleChange6 = event => {
		this.setState({ UserAddress: event.target.value });
	}
	handleChange7 = event => {


		const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
		if(strongRegex.test(event.target.value)) {
			this.setState({ backgroundColor: "#0F9D58" });
			this.setState({ UserPassword: event.target.value });
		} else if(mediumRegex.test(event.target.value)) {
			this.setState({ backgroundColor: "#F4B400" });
		} else {
			this.setState({ backgroundColor: "#DB4437" });
		}

		
	}

	handleSubmit = event => {
		event.preventDefault();


		const Userfullname = this.state.Userfullname;
		const UserId = parseInt(this.state.UserId);
		const Useremail = this.state.Useremail;
		const Userage = parseInt(this.state.Userage);
		const Usergender = this.state.Usergender;
		const UserPhoneNumber = this.state.UserPhoneNumber;
		const UserAddress = this.state.UserAddress;
		const UserPassword = this.state.UserPassword;
		const UserProfile = "anonymus.png";

		axios.post(UPLOAD_ENDPOINT, { Userfullname, UserId, Useremail, Userage, Usergender, UserPhoneNumber, UserAddress, UserPassword, UserProfile })
			.then(function (response) {
				if (response.data === "Successfully created new account") {
					alert("Successfully created new account")
					window.location = "/form-login"
				}
				else {

					alert(response.data)
					window.location = "/form-register"
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
											<input type="text" style={{ 'text-transform': 'capitalize' }} required name="Userfullname" className="form-control" onChange={this.handleChange} placeholder="Name" />
										</div>
										<div className="form-group">
											<input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 14)} required name="UserId" className="form-control" onChange={this.handleChange1} placeholder="National ID" />
										</div>
										<div className="form-group">
											<input type="email" required name="Useremail" className="form-control" onChange={this.handleChange2} placeholder="E-mail" />
										</div>
										<div className="form-group">
											<input type="number" required name="Userage" className="form-control" onChange={this.handleChange3} placeholder="Age" />
										</div>
										<div className="form-group">
											<select required className="form-select form-control" onChange={this.onDropdownSelected2}>
												<option value="" selected >Gender</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
											</select>
										</div>
										<div className="form-group">
											<input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 11)} required name="UserPhoneNumber" className="form-control" onChange={this.handleChange5} placeholder="Phone Number" />
										</div>
										<div className="form-group">
											<input type="text" required name="UserAddress: " className="form-control" onChange={this.handleChange6} placeholder="Address" />
										</div>

										<div className="form-group" >
											<input type="password" style={{ backgroundColor: this.state.backgroundColor }} required name="UserPassword" className="form-control" onChange={this.handleChange7} placeholder="Password" />
										</div>
										<div className="form-group">
											<button type='submit' className="btn btn-primary w-100 radius-xl">Register Now</button>
										</div>
										<div className="text-center mt-40">
											<p className="mt-0">Are You A Doctor?</p>
											<Link className="btn btn-lg btn-secondary w-100" data-toggle="tab" to="/form-register-doctor">Rigster As Doctor</Link>
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

export default FormLogin;