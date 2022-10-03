import React, {Component} from 'react';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import MainBannerSection from "../elements/main-banner";
import AboutSection from "../elements/about";
import WorkSection from "../elements/work";
import AppointmentSection from "../elements/appointment";
import TestimonialSection from "../elements/testimonial";
import ServicesSliderSection from "../elements/services-slider";
import LatestNewsSection from "../elements/latest-news-slider";

class Index extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<MainBannerSection />
				
				<AboutSection />
				
				<WorkSection />
				
				<AppointmentSection />
				
				<ServicesSliderSection />
				
				<TestimonialSection />
				
				<LatestNewsSection />
				
				<Footer />
				
			</>
		);
	}
}

export default Index;