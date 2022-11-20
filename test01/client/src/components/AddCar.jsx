import React from 'react'
import { Link } from 'react-router-dom'
import {postCar} from "../data/index"

const headingStyle={
    margin:"100px"
}

const inputStyle={
    width:"50%",
    height:'30px',
    fontSize:"18px"
}

const addButStyle={
    display:"block",
    margin:"50px auto",
    padding:"15px",
    fontSize:"21px",
    color:"darkgreen",
    backgroundColor:"lightgreen",
    border:"1px solid darkgreen",
    borderRadius:"5px",
    cursor:"pointer",
    textDecoration:"none",
    width:"100px",
}

const initState={
    carBrand:"",
    carModel:"",
    carNumber:"",
    ownerName:"",
    rented:false
}

const AddCar = () => {

    const [input,setInput]=React.useState(initState);

    const inputChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input);
    }

    const addData=()=>{
        postCar(input);
    }

  return (
    <div>
      <h1 style={headingStyle}>Add Car For Renting</h1>
      <div>
      <h2>Car Band Name</h2>
      <input type="text" placeholder='Car Brand Name' name='carBrand' value={input.carBrand} onChange={(e)=>inputChange(e)} style={inputStyle} />
      <h2>Car Model Name</h2>
      <input type="text" placeholder='Car Model Name' name='carModel' value={input.carModel} onChange={(e)=>inputChange(e)} style={inputStyle} />
      <h2>Car Number</h2>
      <input type="text" placeholder='Car Number' name='carNumber' value={input.carNumber} onChange={(e)=>inputChange(e)} style={inputStyle} />
      <h2>Owner Name</h2>
      <input type="text" placeholder='Owner Name' name='ownerName' value={input.ownerName} onChange={(e)=>inputChange(e)} style={inputStyle} />
      <Link to={`/`} style={addButStyle} onClick={addData}>Add</Link>
      </div>
    </div>
  )
}

export default AddCar
