import React from "react";
export const AppContext = React.createContext({})
export const AppProvider = (props:any) => {

  const [countryData, setCountryData] = React.useState({});

  return(
      <div>
    <AppContext.Provider value={{
      country: countryData,
      setCountry: setCountryData,
    }}>
      {props.children}
    </AppContext.Provider>
    </div>
  );
}