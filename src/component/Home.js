import React, { Component } from 'react'
import CCAP from './images/CCAP.jpg'
import Screenshot from './images/Screenshot.png'
import wdct from './images/wdct.png'
import webd from './images/webd.jpg'
import js from './images/js.png'
import html from './images/html.jpg'
import css from './images/css.png'
import { NavLink } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
        <>
         <div>
        <NavLink  activeclassname="active_class" to ="/">HOME</NavLink>
        <NavLink  activeclassname="active_class" to= "/weather">WEATHER</NavLink>
        <NavLink  activeclassname="active_class" to ="/App">TODO</NavLink>
        </div>
      <div style={{backgroundColor: "rgb(100, 15, 62)"}}>
       

          <h3 style={{textAlign: "center",marginTop: "0.8em"}}><font style={{color: "white"}}>REGISTER!! IF INTERESTED IN WEB DEVELOPMENT</font>   </h3>
       
        <div className="card" style={{borderWidth: "3px", backgroundColor: "rgb(243, 167, 230)"}}>
             
            <b><p style={{textAlign: "center",fontSize: "20px",marginTop: "2.5px"}}> HI,MY NAME IS KASHISH AGRAWAL</p> </b> 
                  
             <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img src={Screenshot} className="d-block w-100" alt="WEB_DEVELOPMENT" style={{height: "500px",width: "100%"}}/>
                  </div>
                  <div className="carousel-item active">
                    <img src={CCAP} className="d-block w-100" alt="CCA" style={{height: "500px",width: "100%"}}/>
                  </div>
                  <div className="carousel-item">
                    <img src={wdct} className="d-block w-100" alt="WDCT" style={{height: "500px",width: "100%"}}/>
                  </div>
                  <div className="carousel-item">
                    <img src={webd} className="d-block w-100" alt="WEB_DEVELOPMENT" style={{height: "500px",width: "100%"}}/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <img src={js} style={{width: "250px", height: "230px",padding: "1.5em"}}/><br/>
                    <p style={{marginLeft: "5 em"}}>  JAVA SCRIPT</p>
                  </div>
                  <div className="col-sm">
                    <img src={html} style={{width: "250px", height: "230px",padding: "1.5em"}}/><br/>
                    <p style={{marginLeft: ".5 em"}}> HYPER-TEXT MARKUP LANGUAGE</p>
                  </div>
                  <div className="col-sm">
                    <img src={css} style={{width: "250px", height: "230px",padding: "1.5em"}}/><br/>
                    <p  style={{marginLeft: "1.8 em"}}> CASCADING STYLE SHEET</p>
                  </div>
                </div>
              </div>
              <div  className="container">
                <div className="row">
                  <div className="col-sm">
                        <form style={{fontSize:"30 px",marginTop: "2 em"}}>
                          <label  htmlFor="mail">E.mail</label>
                          <input type="email" id="mail" name="mail"/>
                        </form>
                  </div>
                  <div className="col-sm">
                        <form style={{fontSize:"30 px",marginTop: "2 em"}}>
                          <label  htmlFor="contact">Contact</label>
                          <input type="number" id="contact" name="contact"/>
                        </form> 
                 </div> 
               </div>      
              </div>
                 <button className="btn btn-primary" id="myBtn">SUBMIT</button>
                 <div id="myModal" className="modal">
                   <div className="modal-dialog">
                   <div className="modal-content">
                     <div className="close">&times;</div>
                     <h3>SUCCESSFUL</h3>
                     <p style={{fontSize: "22px"}}>Thank you for submission. Will reach you out soon!!</p>
                   </div>
                 </div>
                </div>
         </div>
         <div className="footer">
         <footer className="page-footer font-small special-color-dark pt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4">
                <form className="form-inline">
                  <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                    aria-label="Search"/>
                  <i className="fas fa-search" aria-hidden="true"></i>
                </form>
                
              </div>
                <div className="col-md-6 mb-4">

                  <form className="input-group">
                    <input type="text" className="form-control form-control-sm" placeholder="Your email"
                      aria-label="Your email" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                      <button className="btn btn-sm btn-outline-white my-0" style={{color: "aliceblue"}} type="button">Sign up</button>
                    </div>
                  </form>
                </div>
            </div>
         </div>   
         <div className="footer-container"
         style={{marginTop: "1em", marginBottom: "2 em"}}>
             <div className="footer">
              <div  className="container">
                <div className="row">
                  <div className="col-sm">
                 <div className="footer-heading footer-1">
                     <h2 style={{color: "white"}}>About Us</h2>
                     <a href="#" style={{textDecoration: "none"}}>Blog</a><br/>
                     <a href="#" style={{textDecoration: "none"}}>Demo</a><br/>
                     <a href="#" style={{textDecoration: "none"}}>Investors</a><br/>
                     <a href="#" style={{textDecoration: "none"}}>Customers</a>
                 </div>
                 </div>
                 <div className="col-sm">
              <div className="footer-heading footer-3">
                  <h2 style={{color: "white"}}>Social Media</h2>
                  <a href="#" style={{textDecoration: "none"}}>Instagram</a><br/>
                  <a href="#" style={{textDecoration: "none"}}>Facebook</a><br/>
                  <a href="#" style={{textDecoration: "none"}}>Linkedin</a><br/>
                  <a href="#" style={{textDecoration: "none"}}>E-mail</a>
              </div>
             </div>
            </div>
           </div>
         </div>
         </div>
         </footer>
         </div>   
         </div>
     </> 
    )
  }
}

export default Home
