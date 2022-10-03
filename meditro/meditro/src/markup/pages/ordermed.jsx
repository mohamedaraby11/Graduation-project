import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from "react";
import axios from "axios";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';


// layout
import Header from "../layout/header2";
import Footer from "../layout/footer";
const UPLOAD_ENDPOINT = "http://127.0.0.1:8000/med";



class ordermed extends Component {

  state = {
    medicine: [],
    cl_id: '',
    med_Id: ''

  }
  componentDidMount() {
    if (sessionStorage.getItem("Is_login")) {

      this.setState({

        cl_id: sessionStorage.getItem("userID")

      });
      axios.get(UPLOAD_ENDPOINT).then((res) => {
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

  buymedic = event => {
    event.preventDefault();
    const med_Id = event.target.value.id;
    const cl_Id = this.state.cl_id;
    const found = this.state.medicine.find(obj => {
      return obj.drug_id === med_Id;
    });
    const drug_category= found['drug_category'];
    const drug_desc = found['drug_desc'];
    const drug_name = found['drug_name'];
    const drug_price = found['drug_price'];
    axios.post(UPLOAD_ENDPOINT, { cl_Id,drug_category,drug_desc,drug_name,drug_price }).then(function (response) {
      alert(response.data)
    }

    )
  }
  render() {
    return (
      <>

        <Header />
        <Container>
          <Row xs={3}>
            {this.state.medicine.map((i) => {
              return (
                <Col>
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">{i.drug_name}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">{i.drug_desc}</CardSubtitle>
                      <CardText>${i.drug_price}</CardText>
                      <Button onClick={this.buymedic} value={i.drug_id}>Puy Now</Button>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
        <Footer />
      </>
    )
  }
}

export default ordermed;