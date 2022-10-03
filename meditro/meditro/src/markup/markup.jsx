import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import FormLogin from './pages/form-login';
import FormLogindoc from './pages/form-login-doctor';
import FormRegister from './pages/form-register';
import FormLogindoctor from './pages/form-register-doctor';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import perception from './pages/perception';
import appointment from './pages/appointment';
import onlineMeeting from './pages/online-meeting';
import CovidTest from './pages/covid-test';
import drappointment from './pages/drappointment'
import ordermed from './pages/ordermed';
class Markup extends Component{
	render(){
		return(
			<>
				<BrowserRouter basename={'/react/'}>
				
					<Switch>
					
						<Route path='/' exact component={Index} />
						<Route path='/about-us' exact component={AboutUs} />
						<Route path='/team' exact component={Team} />
						<Route path='/services' exact component={Services} />
						<Route path='/service-detail' exact component={ServiceDetail} />
						<Route path='/form-login' exact component={FormLogin} />
						<Route path='/form-login-doctor' exact component={FormLogindoc} />
						<Route path='/form-register' exact component={FormRegister} />
						<Route path='/form-register-doctor' exact component={FormLogindoctor} />
						<Route path='/form-forget-password' exact component={FormForgetPassword} />
						<Route path='/faq' exact component={Faq} />
						<Route path='/contact-us' exact component={ContactUs} />
						<Route path='/booking' exact component={Booking} />
						<Route path='/perception' exact component={perception} />
						<Route path='/appointment' exact component={appointment} />
						<Route path='/ordermed' exact component={ordermed} />
						<Route path='/drappointment' exact component={drappointment} />

						<Route path='/onlineMeeting' exact component={onlineMeeting} />
						<Route path='/CovidTest' exact component={CovidTest} />

						<Route path='/blog-grid' exact component={BlogGrid} />
						<Route path='/blog-details' exact component={BlogDetails} />
						<Route component={Error} />
						
					</Switch>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}

export default Markup;