import React from 'react'

const List = ({el,rentACar,setT}) => {

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

  return (
    <tr>
      <td style={tdStyle}>{el.carBrand}</td>
      <td style={tdStyle}>{el.carModel}</td>
      <td style={tdStyle}>{el.carNumber}</td>
      <td style={tdStyle}>{el.ownerName}</td>
      <td style={tdStyle}><button style={rentBut} onClick={()=>rentACar(el._id)}>{el.rented?"Unrent":"Rent"}</button></td>
    </tr>
  )
}

export default List