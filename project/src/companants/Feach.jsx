import React, { createContext } from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Box from "./Box";
import Login from "./login";
export const UserContext = createContext(null);
function Feach() {
  const [user, setuser] = useState([]);
  const [id, setid] = useState(0);
  useEffect(() => {
    async function featch() {
      try {
        const dataBase = await axios.get(
          "https://65572f1fbd4bcef8b612350d.mockapi.io/shoestore/product"
        );
        setuser(dataBase.data);
        
        console.log("Data fetched successfully:", dataBase.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    featch();
    
  }, []);






  const uservaliue = { user };

  return (
    <UserContext.Provider value={uservaliue}>
      <Box></Box>
    </UserContext.Provider>
  );
}

export default Feach;
