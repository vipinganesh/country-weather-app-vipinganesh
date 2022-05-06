import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { COUNTRY_API } from "../components/constants";
import './InputForm.css' ;



const InputForm = () => {
    const context = React.useContext(AppContext)
    const {value}:any = context ;
    const navigate = useNavigate();
    
    const [State,SetState] = useState("");
    const handleInputChange = (e:any) => {
       SetState(e.target.value);
    };

    const isButtonDisabled =()=>{
        return validateInput(State);
      }

    const handleSubmit = (e:any) => {
        e.preventDefault() ;
        fetch(`${COUNTRY_API}/${value.country}`)
        .then((resp) => {
          resp.json().then(data => {
            if(Array.isArray(data) && data.length){
              value.SetCountry(data[0]);
              navigate("/CountryDetails")
            }
          })
        })
        .catch(err => {
          console.log(err);
        })
       
    };

    return (
        <div className="Input-form">
          <form onSubmit={handleSubmit}>
          <label className="CountryName">
           Country Name:
          <input type="text"value={State} className="input" onChange={handleInputChange} placeholder="Country Name" />
          </label>
          <button type="submit"  name="Submit"
              className="button"
              disabled={!isButtonDisabled()} >
            Submit</button>
          </form>
        </div>
    )   

}

export default InputForm ;