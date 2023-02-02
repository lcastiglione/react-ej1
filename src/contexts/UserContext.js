import React, { useState, useEffect } from "react";
//import getFavs from 'services/getFavs'

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [user, setUser] = useState(() => window.sessionStorage.getItem("user"));
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));

  useEffect(() => {
    if (!jwt) return setFavs([]);
    //getFavs({ jwt }).then(setFavs);
  }, [jwt]);

  return (
    <Context.Provider
      value={{
        favs,
        jwt,
        setFavs,
        setJWT,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
