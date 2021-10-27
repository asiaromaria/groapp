import axios from "axios";
import React, { useEffect, useState } from "react";



function Dashboard ( {user} ) {

  // const [user, setUser] = useState({})
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  const submitHandler =(e) =>{
    e.preventDefault();
   
    };



  return (
    <>
    
     
      <h1>
          Welcome {user}
      </h1>

    </>
  );
  }

export default Dashboard
