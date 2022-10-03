import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
// Layout
import Header from "../layout/header2";
import Footer from "../layout/footer";


import TimePicker from 'react-time-picker';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
// backend api


class Booking extends Component {


	state = {
		countries: [],
		choice: [],
		doc_per_cat: ["please select a Doctor"],
		username: '',
		slected_depa: '',
		selected_doc: '',
		usernumber: '',
		datetoapp: '',
		timetoapp: ''
	}

	componentDidMount() {

		if (sessionStorage.getItem("Is_login")) {
			axios.get('http://127.0.0.1:8000/doccat').then((res) => {
				this.setState({
					countries: res.data

				});
				//console.log("print cat");
				//var item_value = sessionStorage.getItem("username");
				//console.log(item_value);
				//console.log(this.state.countries);
			}).catch((err) => { console.log(err); });


		}
		else {
			sessionStorage.clear();
			alert("Please login First")
			window.location = "/form-login"
		}

	}
	onDropdownSelectedREf = (e) => {
		this.onDropdownSelected(e);

	}
	selsct_a_doc = (e) => {
		this.setState({ selected_doc: e.target.value });

	}
	handelchange_time = event => {
		this.setState({ timetoapp: event.target.value });
	}
	handlechange_name = event => {
		this.setState({ username: event.target.value });
	}
	handlechange_number = event => {
		this.setState({ usernumber: event.target.value });
	}
	handlechange_date = event => {
		this.setState({ datetoapp: event.target.value });
	}
	onDropdownSelected(e) {
		let DoctorCategory = e.target.value;
		this.setState({ slected_depa: e.target.value });
		axios.post('http://127.0.0.1:8000/docpercat', { DoctorCategory }).then((res) => {
			this.setState({
				doc_per_cat: res.data
			});
			//console.log("print cat");
			//var item_value = sessionStorage.getItem("username");
			//console.log(item_value);
			//console.log(this.state.doc_per_cat);
		}).catch((err) => { console.log(err); });

		//console.log("THE VAL", e.target.value);
		//here you will see the current selected value of the select input
	}

	handleSubmit = event => {
		event.preventDefault();


		const department = this.state.slected_depa;
		const doct_name = this.state.selected_doc;
		const cl_name = this.state.username;
		const cl_pnumber = this.state.usernumber;
		const b_date = this.state.datetoapp;
		const UserId = sessionStorage.getItem("userID");
		const b_time = this.state.timetoapp;


		axios.post('http://127.0.0.1:8000/bookapp', { department, doct_name, cl_name, cl_pnumber, b_date, b_time, UserId })
			.then(function (response) {
				if (response.data === "Successfully booked your aapionment") {
					alert("Successfully booked your aapionment")
					window.location = "/appointment"

				}
				else { alert("Faild to booked your aapionment") }
			}

			)
	}

	render() {
		const { countries } = this.state;
		let countriesList = countries.length > 0
			&& countries.map((item, i) => {
				return (<option key={i} value={item.index}>{item}</option>
				)
			}, this);
		const { choice } = this.state;
		let chooseList = choice;

		const { doc_per_cat } = this.state;
		let doclist = doc_per_cat.length > 0
			&& doc_per_cat.map((item, j) => {
				return (<option key={j} value={item.index}>{item}</option>
				)
			});


		return (
			<>

				<Header />

				<div className="page-content bg-white">

					<div className="banner-wraper">
						<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Booking</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Booking</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
							<img className="pt-img2 animate2" src={circleDots} alt="" />
							<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
						</div>
					</div>

					<section className="section-area section-sp2 appointment-wraper">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-xl-5 col-lg-6 col-md-6">
									<div className="appointment-form form-wraper">
										<h3 className="title">Book Appointment</h3>
										<form onSubmit={this.handleSubmit}>
											<div className="form-group">
												<select className="form-select form-control" onChange={this.onDropdownSelectedREf} >{countriesList}</select>
											</div>
											<div className="form-group">
												<select className="form-select form-control" defaultValue={"please choose a Doctor"} onChange={this.selsct_a_doc}>
													{doclist}
												</select>
											</div>
											<div className="form-group">
												<input type="text" required={true} placeholder={sessionStorage.getItem("username")} className="form-control" onChange={this.handlechange_name} />
											</div>
											<div className="form-group">
												<input type="text" className="form-control" onChange={this.handlechange_number} placeholder="Phone Numbers" />
											</div>
											<div className="form-group">
												
												<input type="time" onChange={this.handelchange_time} className="form-control"></input>
											</div>
											<div className="form-group">
												<input type="date" onChange={this.handlechange_date} className="form-control" />
												<label>Hint: All appointment from 5 PM to 9 PM</label>
											</div>
											<button type="submit" className="btn btn-secondary btn-lg">Appointment Now</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>

				</div>

				<Footer />

			</>
		);
	}
}

export default Booking;