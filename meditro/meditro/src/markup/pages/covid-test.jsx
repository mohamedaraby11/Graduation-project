import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from "react";
import axios from "axios";
import Form from "../pages/covide_imgtest"
// layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

class CovidTest extends Component {

	state = {
		faver: '',
		Tiredness: '',
		Dry_Couch: '',
		Sore_Throa: '',
		Pains: '',
		Nasal_Congestion: '',
		Runny_Rose: '',
		Diarrhea: '',
		None_Exeriecing: '',
		Gender_Female: '',
		Gender_Male: '',
		Gender_Transgender: '',
	}

	onDropdownSelected1 = (e) => {

		this.setState({
			faver: e.target.value
		});

	}

	onDropdownSelected2 = (e) => {

		this.setState({
			Tiredness: e.target.value
		});

	}
	onDropdownSelected3 = (e) => {

		this.setState({
			Dry_Couch: e.target.value
		});

	}
	onDropdownSelected4 = (e) => {

		this.setState({
			Sore_Throa: e.target.value
		});

	}
	onDropdownSelected6 = (e) => {

		this.setState({
			Pains: e.target.value
		});

	}
	onDropdownSelected7 = (e) => {

		this.setState({
			Nasal_Congestion: e.target.value
		});

	}
	onDropdownSelected8 = (e) => {

		this.setState({
			Runny_Rose: e.target.value
		});

	}
	onDropdownSelected9 = (e) => {

		this.setState({
			Diarrhea: e.target.value
		});

	}
	onDropdownSelected10 = (e) => {

		this.setState({
			None_Exeriecing: e.target.value
		});

	}
	onDropdownSelected11 = (e) => {

		this.setState({
			Gender_Female: e.target.value
		});

	}
	onDropdownSelected12 = (e) => {

		this.setState({
			Gender_Male: e.target.value
		});

	}
	onDropdownSelected13 = (e) => {

		this.setState({
			Gender_Transgender: e.target.value
		});

	}



	handleSubmit = event => {
		event.preventDefault();

		const faver = this.state.faver;
		const Tiredness = this.state.Tiredness;
		const Dry_Couch = this.state.Dry_Couch;
		const Sore_Throa = this.state.Sore_Throa;
		const Pains = this.state.Pains;
		const Nasal_Congestion = this.state.Nasal_Congestion;
		const Runny_Rose = this.state.Runny_Rose;
		const Diarrhea = this.state.Diarrhea;
		const None_Exeriecing = this.state.None_Exeriecing;
		const Gender_Female = this.state.Gender_Female;
		const Gender_Male = this.state.Gender_Male;
		const Gender_Transgender = this.state.Gender_Transgender;




		axios.post('http://ac20-45-100-144-237.ngrok.io/test', { faver, Tiredness, Dry_Couch, Sore_Throa, Pains, Nasal_Congestion, Runny_Rose, Diarrhea, None_Exeriecing, Gender_Female, Gender_Male, Gender_Transgender })
			.then(function (response) {
				alert(response.data)
				if (response.data === "yes") {
					alert("yes")

				}
				else {
					alert("No")
				}

			}

			)
	}



	render() {
		return (
			<>

				<Header />
				<section className="section-area section-sp2 appointment-wraper">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-5 col-lg-6 col-md-6">
								<div className="appointment-form form-wraper">
									<h3 className="title">Check For Covid-test</h3>
									<form onSubmit={this.handleSubmit}>
										<div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected1}>
												<option value="" selected >Fever</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div>
										<div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected2}>
												<option value="" selected >Tiredness</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div>
										<div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected3}>
												<option value="" selected >Dry Couch </option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div>
										<div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected4}>
												<option value="" selected >Sore Throa</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div>
										<div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected6}>
												<option value="" selected >Pains</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div><div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected7}>
												<option value="" selected >Nasal Congestion</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div><div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected8}>
												<option value="" selected >Runny Rose</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div><div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected9}>
												<option value="" selected >Diarrhea</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div><div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected10}>
												<option value="" selected >None Exeriecing</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div><div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected11}>
												<option value="" selected >Gender Female</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div><div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected12}>
												<option value="" selected >Gender Male</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div><div className="form-group">
											<select className="form-select form-control" onChange={this.onDropdownSelected13}>
												<option value="" selected >Gender Transgender</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div><div className="form-group">


										</div>

										<button type="submit" className="btn btn-secondary btn-lg">Check Now</button>
									</form>
								</div>
							</div>
						</div>
						<div className="container">
                         Test Using X-Ray Image
						 <Form />
						</div>
					</div>
				</section>
				<Footer />
			</>
		)
	}
}

export default CovidTest;