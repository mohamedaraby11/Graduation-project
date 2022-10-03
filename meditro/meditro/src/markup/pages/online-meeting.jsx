import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from "react";
import axios from "axios";
// layout
import Header from "../layout/header2";
import Footer from "../layout/footer";

class onlineMeeting extends Component {

    componentDidMount() {

		if (sessionStorage.getItem("Is_login")) {
			//
		}
		else{
			sessionStorage.clear();
			alert("Please login First")
			window.location = "/form-login"
		}

	}
    render() {
        return (
            <>

                <Header />




                <a className='px-5 text-center btn btn-light' href="http://localhost:8005/" target="_blank" rel="noreferrer noopener">Join Online Meeting</a>
                <Footer />

            </>
        );
    }
}

export default onlineMeeting;