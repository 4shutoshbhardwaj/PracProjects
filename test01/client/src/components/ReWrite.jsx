import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getCar,updateCar } from '../data'

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

const ReWrite = () => {

    const [input,setInput]=React.useState(initState);

    const{id}=useParams();

    useEffect(()=>{
        getCar(id).then((res)=>setInput(res[0]))
    },[])

    const inputChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }

    const addData=()=>{
        updateCar(input,id);
    }

  return (
    <div>
      <h1 style={headingStyle}>Re-write Car Info</h1>
      {
        input?<div>
        <h2>Car Band Name</h2>
        <input type="text" placeholder='Car Brand Name' name='carBrand' value={input.carBrand} onChange={(e)=>inputChange(e)} style={inputStyle} />
        <h2>Car Model Name</h2>
        <input type="text" placeholder='Car Model Name' name='carModel' value={input.carModel} onChange={(e)=>inputChange(e)} style={inputStyle} />
        <h2>Car Number</h2>
        <input type="text" placeholder='Car Number' name='carNumber' value={input.carNumber} onChange={(e)=>inputChange(e)} style={inputStyle} />
        <h2>Owner Name</h2>
        <input type="text" placeholder='Owner Name' name='ownerName' value={input.ownerName} onChange={(e)=>inputChange(e)} style={inputStyle} />
        <Link to={`/`} style={addButStyle} onClick={addData}>Update</Link>
        </div>:<h2>Loading...</h2>
      }
    </div>
  )
}

export default ReWrite
