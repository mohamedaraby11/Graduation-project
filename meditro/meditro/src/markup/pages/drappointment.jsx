import {Component} from 'react';
import { Link } from 'react-router-dom';
import React from "react";
import axios from "axios";


// layout
import Header from "../layout/header2";
import Footer from "../layout/footer";
const UPLOAD_ENDPOINT = "http://127.0.0.1:8000/getappperdr";
class drappointment extends Component{

  state={
		lits_of_date: []
		
	}
  componentDidMount() {
    const doc_name = sessionStorage.getItem("username");
    axios.post(UPLOAD_ENDPOINT,{doc_name}).then((res)=>
		{
			this.setState({
				lits_of_date:res.data
			  });
			  //console.log("print cat");
			  //console.log(this.state.lits_of_date);
		}).catch((err) => {console.log(err);});
		
		
	}

    render(){
        return(
            <>
            
            <Header />
            <div class="container">
  <h2>Appointment Detials</h2>
  <p>Better Healthcare for a Better Life </p>            
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Patient Name</th>
        <th>Meeting Date</th>
        <th>Meeting online</th>
        <th>Room Name</th>
      </tr>
    </thead>
    <tbody>
    {this.state.lits_of_date.map(item =>{
        return(
          <tr>
            <td>{item.cl_name}</td>
            <td>{item.b_date}</td>
            <td><a href="http://localhost:8005/" target="_blank" rel="noreferrer noopener">open meeting</a></td>
            <td>{item.cl_name+item.doct_name+item.department}</td>
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

export default drappointment;