import React from 'react'
import { Link } from 'react-router-dom'

const List = ({el,rentACar,deleteCar}) => {

    const tdStyle={
      border:"1px solid #cecece",
      padding:10,
      margin:10
    }

    const rentBut={
      padding:"5px 10px",
      backgroundColor:"lightblue",
      color:"blue",
      border:"1px solid blue",
      borderRadius:"4px",
      cursor:"pointer"
    }
    
    const deleteBut={
      padding:"5px 10px",
      backgroundColor:"pink",
      color:"red",
      border:"1px solid red",
      borderRadius:"4px",
      cursor:"pointer"
    }
    
    const reWriteBut={
      padding:"5px 10px",
      backgroundColor:"pink",
      color:"red",
      border:"1px solid red",
      borderRadius:"4px",
      cursor:"pointer",
      textDecoration:"none"
    }

  return (
    <tr>
      <td style={tdStyle}>{el.carBrand}</td>
      <td style={tdStyle}>{el.carModel}</td>
      <td style={tdStyle}>{el.carNumber}</td>
      <td style={tdStyle}>{el.ownerName}</td>
      <td style={tdStyle}><button style={rentBut} onClick={()=>rentACar(el._id)}>{el.rented?"Unrent":"Rent"}</button></td>
      <td style={tdStyle}><button style={deleteBut} onClick={()=>deleteCar(el._id)}>Delete</button></td>
      <td style={tdStyle}><Link to={`/re-write/${el._id}`} ><button style={reWriteBut}>Re-write</button></Link></td>
    </tr>
  )
}

export default List
