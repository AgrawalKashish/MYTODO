import React, {useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
export default function Wdct() {

    const[city, setCity] = useState(null);
    const[search, setSearch] = useState("Hathras");
    
    useEffect(() => {
        const fetchApi = async () => {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=48c09a1402cf18ab5be9fcd4e274829f`
            const response = await fetch(url);
            const resJson = await  response.json()
            setCity(resJson.main);
        }

        fetchApi();
    },[search])




    return (
        <>

        <div>
        <NavLink  activeclassname="active_class" to ="/">HOME</NavLink>
        <NavLink  activeclassname="active_class" to= "/weather">WEATHER</NavLink>
        <NavLink  activeclassname="active_class" to ="/App">TODO</NavLink>
        </div>
            <div>
            <h1  className="Weather">WEATHER</h1>
          <div className="box">
              <div className="inputData">
                  <input
                  type="search"
                  className="inputField"
                  defaultValue=""
                  onChange= {(event) =>{   
                      setSearch(event.target.value)
                  }}
                  />
              </div>
              {
                  !city ? (
                      <p>NO DATA FOUND</p>
                  ) :(
                <div>
                    <div className= "info">
                        
                    <h2>{search}</h2>
                    <h3 className="temp">
                       Temp: {city.temp}&deg;C
                    </h3>
                    <h3> Min: {city.temp}&deg;C || Max: {city.temp}&deg;C </h3>
                     </div>
                </div>
                  )
              }
          </div>
            </div>
            <div className="footer" id="footer">
                <footer className="page-footer font-small special-color-dark pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <form className="form-inline">
                                    <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                                        aria-label="Search" />
                                    <i className="fas fa-search" aria-hidden="true"></i>
                                </form>

                            </div>
                            <div className="col-md-6 mb-4">

                                <form className="input-group">
                                    <input type="email" className="form-control form-control-sm" placeholder="Your email"
                                        aria-label="Your email" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-sm btn-outline-white my-0" style={{ color: "aliceblue" }} type="button">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="footer-container"
                        style={{ marginBottom: "2 em" }}>
                        <div className="footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="footer-heading footer-1">
                                            <h2 style={{ color: "white" }}>About Us</h2>
                                            <a href="#" style={{ textDecoration: "none" }}>Blog</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Demo</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Investors</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Customers</a>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="footer-heading footer-3">
                                            <h2 style={{ color: "white" }}>Social Media</h2>
                                            <a href="#" style={{ textDecoration: "none" }}>Instagram</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Facebook</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>Linkedin</a><br />
                                            <a href="#" style={{ textDecoration: "none" }}>E-mail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}