import React from "react";
import DashboardNav from "../Components/DashboardNav";
import Footer from "../Components/footer";
import Founders from "../Components/Founders";
import '../Components/about.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBRow,
  
} from 'mdb-react-ui-kit';
const DashboardAboutPage = () => {
  return (
  <div>
    <DashboardNav/>
    <div className="about-wrapper">
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCard  style={{ backgroundColor: '#ffffff', color: 'black' }} className='text-body mb-3 my-card' >
        <MDBCardHeader  style={{ fontSize: '1.5rem' }}>Who We Are?</MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
          <p style={{ fontSize: '1.3rem' }}>
          We are a non-profit organization committed to making a positive impact
        in our community. Our mission is to provide resources and support to
        those in need, and to promote philanthropy and volunteerism.
        </p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
<MDBCard  style={{ backgroundColor: '#ffffff', color: 'black' }} className='text-body mb-3 my-card'>
        <MDBCardHeader  style={{ fontSize: '1.5rem' }}>How We Started?</MDBCardHeader>
        <MDBCardBody>
      
          <MDBCardText>
          <p style={{ fontSize: '1.3rem' }}>
          Our organization was founded in 2005 by a group of dedicated volunteers
        who saw a need for more community support. Since then, we have grown and
        expanded our programs to better serve those in need.
</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
  <MDBCard  style={{ backgroundColor: '#ffffff', color: 'black' }} className='text-body mb-3 my-card'>
        <MDBCardHeader style={{ fontSize: '1.5rem' }}>Who We Count On?</MDBCardHeader>
        <MDBCardBody>
      
          <MDBCardText>
            <p style={{ fontSize: '1.3rem' }}>
          We rely on the generosity of our donors and volunteers to continue our work. Without support from the community we wouldn't be able to continue helping others. Thank you for your continued support!
          </p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBRow>
      </div>
    </div>
    <div className="members-title">
            <h1> Meet The Team</h1>
        </div>
        <div className="founders-wrapper">
          <Founders />
        </div>
    <Footer/>
    </div>
  );
};

export default DashboardAboutPage;
