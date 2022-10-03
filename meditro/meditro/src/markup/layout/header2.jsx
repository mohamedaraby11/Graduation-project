import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/logo.png';
import logoWhite from '../../images/logo-white.png';

class Header extends Component {

	state = {
		uname: '',
		utype: '',
		islo: false
	}



	log_out() {

		sessionStorage.clear();
		window.location = "/"
	}
	componentDidMount() {

		this.setState({ uname: sessionStorage.getItem("username") })
		this.setState({ utype: sessionStorage.getItem("usertype") })
		this.setState({ islo: sessionStorage.getItem("Is_login") })

		// Search Form Popup
		var searchBtn = document.getElementById("quikSearchBtn")
		var searchForm = document.querySelector(".nav-search-bar")
		var closeBtn = document.getElementById("searchRemove")

		searchBtn.addEventListener('click', function () {
			searchForm.classList.add("show")
		})

		closeBtn.addEventListener('click', function () {
			searchForm.classList.remove("show")
		})

		// Mobile Menu Open
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")

		menuIcon.addEventListener('click', function () {
			menuLinks.classList.add("show")
		})

		menuClose.addEventListener('click', function () {
			menuLinks.classList.remove("show")
		})

		// Mobile Submenu open close function
		var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
		for (var y = 0; y < navMenu.length; y++) {
			navMenu[y].addEventListener('click', function () { menuClick(this) });
		}

		function menuClick(current) {
			const active = current.classList.contains("open")
			navMenu.forEach(el => el.classList.remove('open'));

			if (active) {
				current.classList.remove('open')
				console.log("active")
			} else {
				current.classList.add('open');
				console.log("close")
			}
		}

	}

	render() {
		if(this.state.islo)
		{
			if (this.state.utype === "doctor") {
				return (
					<>
						<header className="header rs-nav">
							<Sticky enabled={true} className="sticky-header navbar-expand-lg">
								<div className="menu-bar clearfix">
									<div className="container-fluid clearfix">
										<div className="menu-logo logo-dark">
											<Link to="/"><img src={logo} alt="" /></Link>
										</div>
										<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
											<span></span>
											<span></span>
											<span></span>
										</button>
										<div className="secondary-menu">
											<ul>
	
	
												<li className="num-bx"><i className=""></i>{this.state.uname}</li>
												<li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
											</ul>
										</div>
										<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
											<div className="menu-logo">
												<Link to="/"><img src={logoWhite} alt="" /></Link>
											</div>
											<ul className="nav navbar-nav">
												<li className="active"><Link to="/">Home</Link></li>
												<li>
													<Link to="#">Pages <i className="fas fa-plus"></i></Link>
													<ul className="sub-menu">
														<li className="add-menu-left">
															<ul>
																<li><Link to="/about-us"><span>About Us</span></Link></li>
																<li><Link to="/team"><span>Our Team</span></Link></li>
																<li><Link to="/faq"><span>FAQ's</span></Link></li>
																<li><Link to="/booking"><span>Booking</span></Link></li>
																<li><Link to="/error-404"><span>Error 404</span></Link></li>
	
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<Link to="#">Services <i className="fas fa-plus"></i></Link>
													<ul className="sub-menu">
														<li className="add-menu-left">
															<ul>
																<li><Link to="/perception"><span>perception</span></Link></li>
																<li><Link to="/drappointment"><span>Appointment For Doctor</span></Link></li>
																<li><Link to="/onlineMeeting"><span>Join Online Meeting</span></Link></li>
																<li><Link to="/CovidTest"><span>CovidTest</span></Link></li>
	
															</ul>
														</li>
													</ul>
												</li>
	
												<li><Link to="/contact-us">Contact Us</Link></li>
												<li><Link onClick={this.log_out}>Logout</Link></li>
	
											</ul>
											<ul className="social-media">
												<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
											</ul>
											<div className="menu-close" id="menuClose">
												<i className="ti-close"></i>
											</div>
										</div>
									</div>
								</div>
							</Sticky>
							<div className="nav-search-bar">
								<form>
									<input type="text" className="form-control" placeholder="Type to search" />
									<span><i className="ti-search"></i></span>
								</form>
								<span id="searchRemove"><i className="ti-close"></i></span>
							</div>
						</header>
	
					</>
				)
			}
			else {
				return (
					<>
						<header className="header rs-nav">
							<Sticky enabled={true} className="sticky-header navbar-expand-lg">
								<div className="menu-bar clearfix">
									<div className="container-fluid clearfix">
										<div className="menu-logo logo-dark">
											<Link to="/"><img src={logo} alt="" /></Link>
										</div>
										<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
											<span></span>
											<span></span>
											<span></span>
										</button>
										<div className="secondary-menu">
											<ul>
												<li className="search-btn"><button id="quikSearchBtn" type="button" className="btn-link"><i className="las la-search"></i></button></li>
												<li className="num-bx"><a href="tel:(+01)999888777"><i className="fas fa-phone-alt"></i> (+01) 999 888 777</a></li>
	
												<li className="num-bx"><i className=""></i>{sessionStorage.getItem("username")}</li>
												<li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
											</ul>
										</div>
										<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
											<div className="menu-logo">
												<Link to="/"><img src={logoWhite} alt="" /></Link>
											</div>
											<ul className="nav navbar-nav">
												<li className="active"><Link to="/">Home</Link></li>
												<li>
													<Link to="#">Pages <i className="fas fa-plus"></i></Link>
													<ul className="sub-menu">
														<li className="add-menu-left">
															<ul>
																<li><Link to="/about-us"><span>About Us</span></Link></li>
																<li><Link to="/team"><span>Our Team</span></Link></li>
																<li><Link to="/faq"><span>FAQ's</span></Link></li>
																<li><Link to="/booking"><span>Booking</span></Link></li>
																<li><Link to="/error-404"><span>Error 404</span></Link></li>
	
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<Link to="#">Services <i className="fas fa-plus"></i></Link>
													<ul className="sub-menu">
														<li className="add-menu-left">
															<ul>
																<li><Link to="/services"><span>Service</span> </Link></li>
																<li><Link to="/service-detail"><span>Service Detail</span></Link></li>
																<li><Link to="/perception"><span>perception</span></Link></li>
																<li><Link to="/ordermed"><span>Order Medicens</span></Link></li>
																<li><Link to="/appointment"><span>Appointment Detials</span></Link></li>
																<li><Link to="/drappointment"><span>Appointment For Doctor</span></Link></li>
																<li><Link to="/onlineMeeting"><span>Join Online Meeting</span></Link></li>
																<li><Link to="/CovidTest"><span>CovidTest</span></Link></li>
	
															</ul>
														</li>
													</ul>
												</li>
	
												<li><Link to="/contact-us">Contact Us</Link></li>
												<li><Link to="form-login">Logout</Link></li>
	
											</ul>
											<ul className="social-media">
												<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
											</ul>
											<div className="menu-close" id="menuClose">
												<i className="ti-close"></i>
											</div>
										</div>
									</div>
								</div>
							</Sticky>
							<div className="nav-search-bar">
								<form>
									<input type="text" className="form-control" placeholder="Type to search" />
									<span><i className="ti-search"></i></span>
								</form>
								<span id="searchRemove"><i className="ti-close"></i></span>
							</div>
						</header>
	
					</>
				)
			}

		}
		else
		{
			if (this.state.utype === "doctor") {
				return (
					<>
						<header className="header rs-nav">
							<Sticky enabled={true} className="sticky-header navbar-expand-lg">
								<div className="menu-bar clearfix">
									<div className="container-fluid clearfix">
										<div className="menu-logo logo-dark">
											<Link to="/"><img src={logo} alt="" /></Link>
										</div>
										<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
											<span></span>
											<span></span>
											<span></span>
										</button>
										<div className="secondary-menu">
											<ul>
	
	
												<li className="num-bx"><i className=""></i>{sessionStorage.getItem("username")}</li>
												<li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
											</ul>
										</div>
										<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
											<div className="menu-logo">
												<Link to="/"><img src={logoWhite} alt="" /></Link>
											</div>
											<ul className="nav navbar-nav">
												<li className="active"><Link to="/">Home</Link></li>
												<li>
													<Link to="#">Pages <i className="fas fa-plus"></i></Link>
													<ul className="sub-menu">
														<li className="add-menu-left">
															<ul>
																<li><Link to="/about-us"><span>About Us</span></Link></li>
																<li><Link to="/team"><span>Our Team</span></Link></li>
																<li><Link to="/faq"><span>FAQ's</span></Link></li>
																<li><Link to="/booking"><span>Booking</span></Link></li>
																<li><Link to="/error-404"><span>Error 404</span></Link></li>
																<li><Link to="/form-login"><span>Login / Register</span></Link></li>
	
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<Link to="#">Services <i className="fas fa-plus"></i></Link>
													<ul className="sub-menu">
														<li className="add-menu-left">
															<ul>
																<li><Link to="/perception"><span>perception</span></Link></li>
																<li><Link to="/ordermed"><span>Order medicine</span></Link></li>
																<li><Link to="/drappointment"><span>Appointment For Doctor</span></Link></li>
																<li><Link to="/onlineMeeting"><span>Join Online Meeting</span></Link></li>
																<li><Link to="/CovidTest"><span>CovidTest</span></Link></li>
	
															</ul>
														</li>
													</ul>
												</li>
	
												<li><Link to="/contact-us">Contact Us</Link></li>
	
											</ul>
											<ul className="social-media">
												<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
											</ul>
											<div className="menu-close" id="menuClose">
												<i className="ti-close"></i>
											</div>
										</div>
									</div>
								</div>
							</Sticky>
							<div className="nav-search-bar">
								<form>
									<input type="text" className="form-control" placeholder="Type to search" />
									<span><i className="ti-search"></i></span>
								</form>
								<span id="searchRemove"><i className="ti-close"></i></span>
							</div>
						</header>
	
					</>
				)
			}
			else {
				return (
					<>
						<header className="header rs-nav">
							<Sticky enabled={true} className="sticky-header navbar-expand-lg">
								<div className="menu-bar clearfix">
									<div className="container-fluid clearfix">
										<div className="menu-logo logo-dark">
											<Link to="/"><img src={logo} alt="" /></Link>
										</div>
										<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
											<span></span>
											<span></span>
											<span></span>
										</button>
										<div className="secondary-menu">
											<ul>
												<li className="search-btn"><button id="quikSearchBtn" type="button" className="btn-link"><i className="las la-search"></i></button></li>
												<li className="num-bx"><a href="tel:(+01)999888777"><i className="fas fa-phone-alt"></i> (+01) 999 888 777</a></li>
	
												<li className="num-bx"><i className=""></i>{sessionStorage.getItem("username")}</li>
												<li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow">CONTACT US <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
											</ul>
										</div>
										<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
											<div className="menu-logo">
												<Link to="/"><img src={logoWhite} alt="" /></Link>
											</div>
											<ul className="nav navbar-nav">
												<li className="active"><Link to="/">Home</Link></li>
												<li>
													<Link to="#">Pages <i className="fas fa-plus"></i></Link>
													<ul className="sub-menu">
														<li className="add-menu-left">
															<ul>
																<li><Link to="/about-us"><span>About Us</span></Link></li>
																<li><Link to="/team"><span>Our Team</span></Link></li>
																<li><Link to="/faq"><span>FAQ's</span></Link></li>
																<li><Link to="/booking"><span>Booking</span></Link></li>
																<li><Link to="/error-404"><span>Error 404</span></Link></li>
																<li><Link to="/form-login"><span>Login / Register</span></Link></li>
	
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<Link to="#">Services <i className="fas fa-plus"></i></Link>
													<ul className="sub-menu">
														<li className="add-menu-left">
															<ul>
																<li><Link to="/services"><span>Service</span> </Link></li>
																<li><Link to="/service-detail"><span>Service Detail</span></Link></li>
																<li><Link to="/perception"><span>perception</span></Link></li>
																<li><Link to="/appointment"><span>Appointment Detials</span></Link></li>
																<li><Link to="/onlineMeeting"><span>Join Online Meeting</span></Link></li>
																<li><Link to="/CovidTest"><span>CovidTest</span></Link></li>
	
															</ul>
														</li>
													</ul>
												</li>
	
												<li><Link to="/contact-us">Contact Us</Link></li>
	
											</ul>
											<ul className="social-media">
												<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
												<li><a rel="noreferrer" target="_blank" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
											</ul>
											<div className="menu-close" id="menuClose">
												<i className="ti-close"></i>
											</div>
										</div>
									</div>
								</div>
							</Sticky>
							<div className="nav-search-bar">
								<form>
									<input type="text" className="form-control" placeholder="Type to search" />
									<span><i className="ti-search"></i></span>
								</form>
								<span id="searchRemove"><i className="ti-close"></i></span>
							</div>
						</header>
	
					</>
				)
			}

		}
	}
}

export default Header;
