import {useState, useEffect} from "react";
import './App.css';
import Box from '@mui/material/Box';
import {TextField} from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from "@mui/material"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';


function App() {
  const[city, setCity] = useState()

  const changeCity = (e) => {
    setCity(e.target.value)
  }

  const handleClick = () => {

  }
  
  return (
   
    <>
    <Box sx = {{width:"fit-content", margin:"auto", marginTop:"50px"}}>
      <Box sx = {{display:"flex",alignItems:"center", width:{sm:"600px",md:"900px"}, boxShadow: "1px 1px 1px 1px #888456", borderRadius:"10px" }}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <LocationOnIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search City"
        value = {city}
        onChange = {changeCity}        

      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick = {handleClick} >
        <SearchIcon />
      </IconButton>
     
      </Box>
    </Box>
    </>
  );
}

export default App;
