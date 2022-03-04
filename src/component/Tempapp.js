import React, {useEffect,useState} from 'react';



const Tempapp = () => {

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

    return(
        <>
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
        </>
    )
}
export default Tempapp;