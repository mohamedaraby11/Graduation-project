import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from "react";
import axios from "axios";

// layout
import Header from "../layout/header2";
import Footer from "../layout/footer";
const UPLOAD_ENDPOINT = "http://127.0.0.1:8000/getmedperclient";

class perception extends Component {


  state = {
    medicine: []
  }

  componentDidMount() {

    if (sessionStorage.getItem("Is_login")) {


      const cl_Id = sessionStorage.getItem("userID");
      console.log(cl_Id)
      axios.post(UPLOAD_ENDPOINT, { cl_Id }).then((res) => {
        this.setState({
          medicine: res.data
        });

        //console.log("print cat");
        //console.log(this.state.lits_of_date);
      }).catch((err) => { console.log(err); });

    }
    else {
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
          <h2>Perception</h2>
          <p>Better Healthcare for a Better Life </p>
          <table class="table table-hover">
            <thead>
              <tr>
                <th>drug_name</th>
                <th>Meeting Date</th>
                <th>perception</th>
              </tr>
            </thead>
            <tbody>
              {this.state.medicine.map(item => {
                return (
                  <tr>
                    <td>{item.drug_name}</td>
                    <td>{item.drug_price}</td>
                    <td>{item.drug_category}</td>
                    <td>{item.drug_desc}</td>
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

export default perception;