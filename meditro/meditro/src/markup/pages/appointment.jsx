import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from "react";
import axios from "axios";


// layout
import Header from "../layout/header2";
import Footer from "../layout/footer";
const UPLOAD_ENDPOINT = "http://127.0.0.1:8000/getapp";
class appointment extends Component {

  state = {
    lits_of_date: []

  }
  componentDidMount() {
    if (sessionStorage.getItem("Is_login")) {
      const cl_name = sessionStorage.getItem("username");
      const cl_id = sessionStorage.getItem("userID");
      axios.post(UPLOAD_ENDPOINT, { cl_id }).then((res) => {
        this.setState({
          lits_of_date: res.data
        });
        //console.log("print cat");
        //console.log(this.state.lits_of_date);
      }).catch((err) => { console.log(err); });


    }
    else 
    {
      sessionStorage.clear();
			alert("Please login First")
			window.location = "/form-login"
    }


  }

  render() {
    return (
      <>

        <Header />
        <div class="container">
          <h2>Appointment Detials</h2>
          <p>Better Healthcare for a Better Life </p>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Meeting Date</th>
                <th>Meeting time</th>
                <th>Meeting online</th>
                <th>Room Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.lits_of_date.map(item => {
                return (
                  <tr>
                    <td>{item.doct_name}</td>
                    <td>{item.b_date}</td>
                    <td>{item.b_time}</td>
                    <td><a href="http://localhost:8005/" target="_blank" rel="noreferrer noopener">open meeting</a></td>
                    <td>{item.cl_name+"_" + item.doct_name+"_" + item.department}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Footer />
      </>
    )
  }
}

export default appointment;