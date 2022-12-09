import TextField from "@mui/material/TextField";
import Request from "./ApiQuery";
import { useState } from "react";
function Buscar() {
  const [city, setCity] = useState("");
  const a = (e)=>{
    e.preventDefault()
  }
  return (
    
    <form  onSubmit={a}>
      <TextField 
        onChange={() => {
          setCity(document.getElementById("outlined-basic").value);
        }}
        id="outlined-basic"
        name="city"
        label="City / Country"
        variant="outlined"
        style={{ width:"300px",fontFamily: "monospace", margin: "0px auto", }}
      />
      <br />
      <br />
      <Request city={city}/>

    </form>
  );
}
export default Buscar;
