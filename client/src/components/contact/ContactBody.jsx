import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AiOutlineEnvironment,AiTwotonePhone } from "react-icons/ai";

const Contact = () => {
  return (
  
    <div className="contactUs" >
      <div className="banner-inner">
          <img className="d-block w-100" src="/src/assets/images/contactinner-banner.jpg" alt="inner-banner" />
        </div>
        <div class="container">
            <div class="row">
                <div class='contact_one'><h1><span>C</span>ontact Us</h1> 
                <p>Department of Labour, Government of West Bengal,</p>         
            </div>
            <div className="col-md-6">
                <div className="google-map-code" style={styles.googleMapCode}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2492961573485!2d88.34078147435314!3d22.569777533075587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a2000c0827%3A0x60e3f206d23ed21a!2sNEW%20SECRETARIAT%20BUILDING%2C%20B.B.D.%20Bagh%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1734604262842!5m2!1sen!2sin"
                    width="500"
                    height="300"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    
                />
             </div>
            </div>
            <div className="col-md-6">
            <div style={styles.contactContent}>
                <div><AiOutlineEnvironment /> 12th Floor, N.S Building, Block-A,
                <br/>1, Kiran Shankar Roy Road,<br/>
                Kolkata-700001<br/><br/><br/><br/>
               
                <strong>Help line of Labour Department</strong>, Govt. of West Bengal
                <br/> <AiTwotonePhone /> Shramik Sathi : 1800-103-0009
                </div>
            </div>
            </div>

             </div>
        </div>
    </div>
  
      
  );
};
const styles = {

    googleMapCode: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        marginBottom:'50px',
     
      },
      contactUs:{
        color:'#000'
      },
      contactContent: {
        
        fontSize:'1.1em',
        fontWeight:'300px',
        color: '#999',
        padding: '20px',
        marginBottom:'50px',
      },
   
}
export default Contact;
