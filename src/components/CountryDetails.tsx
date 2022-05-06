import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import { Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { WEATHER_API } from "../components/constants";

const CountryDetails = (props:any)=> {
    const {context}:any = React.useContext(AppContext)
    const {country}:any = context ;

return (
  
    <div className="weather-card">
    <h2>Country Details</h2>
        <h3>{country.name?.common}</h3>
        <img src={country.flags.png} />
        </div>





};
export default CountryDetails;
