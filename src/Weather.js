import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props){
  function handleResponse(response){
    alert(`Weather in ${response.data.name} is ${response.data.main.temp}°C`);
  }

  let apiKey= "38610e778dfb23c2f5bc0f2dc89e84b3";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
     <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
  )
}