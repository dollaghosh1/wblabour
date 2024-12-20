import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AiOutlineEnvironment,AiTwotonePhone } from "react-icons/ai";

const Contact = () => {
  return (
  
    <div className="contact-us" >
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
      contactContent: {
        //display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        fontSize:'1.1em',
        fontWeight:'300px',
        color: '#999',
        padding: '20px',
        marginBottom:'50px',
      },
    backgroundWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: "url('/images/login-background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
    },
    loginContainer: {
      position: 'relative',
      backgroundColor: '#e6f7ff',
      borderRadius: '10px',
      padding: '40px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      width: '100%',
      minHeight: '400px',
      margin: '0 auto',
    },
    userIconWrapper: {
      position: 'absolute',
      top: '-30px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '60px',
      backgroundColor: '#fff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      zIndex: '10',
    },
    userIcon: {
      fontSize: '30px',
      color: '#007bff',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    captchaGroup: {
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    captchaCanvas: {
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    captchaInput: {
      flexGrow: 1,
      marginLeft: '10px',
      padding: '10px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    reloadIcon: {
      marginLeft: '10px',
      fontSize: '20px',
      color: '#007bff',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    reloadIconHover: {
      color: '#0056b3',
    },
    error: {
      color: 'red',
      fontSize: '14px',
      marginTop: '-10px',
      marginBottom: '20px',
    },
    buttonGroup: {
      textAlign: 'center',
    },
    loginButton: {
      background: '#ff6600',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '100%',
      transition: 'all 0.3s ease',
    },
}
export default Contact;
