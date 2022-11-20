import React,{useEffect} from 'react'
import carAni from '../images/carAni.gif';
import {Link} from 'react-router-dom'
import { addToRent, getData } from '../data/index';
import List from './List';

const ImageAni={
    width:'80%'
}

const heading={
    fontSize: "50px",
    color: "black",
    // border: "1px solid black",
    display: "inline-block",
    marginTop: "20px",
    padding: "20px",
    fontWeight: "bold",
    // background: "black"
}

const headingSpan={
    padding:"10px",
    margin:"12px",
    background:"#FF9800",
    borderRadius:"5px",
    color:"black"
}

const tableStyle={
  margin:'50px auto',
  border:"1px solid gray",
  width:"80%"
}

const tdStyleH={
  border:"1px solid #cecece",
  padding:10,
  margin:10,
  fontWeight:"bold",
  fontSize:"20px"
}

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

const AddBut={
  display:"block",
  margin:"50px auto",
  padding:"15px",
  fontSize:"21px",
  color:"darkgreen",
  backgroundColor:"lightgreen",
  border:"1px solid darkgreen",
  borderRadius:"5px",
  cursor:"pointer",
  width:"200px",
  textDecoration:"none"
}

const Home = () => {

  const [data,setData]=React.useState([]);

  const [rent,setRent]=React.useState(false);

  const [t,setT]=React.useState(false);

  const rentalButtonStyle1={
    backgroundColor:rent?"#cecece":"white",
    height:"50px",
    border:"1px solid #cecece",
    width:"200px",
    cursor:"pointer"
  }
  
  const rentalButtonStyle2={
    backgroundColor:rent?"white":"#cecece",
    height:"50px",
    border:"1px solid #cecece",
    width:"200px",
    cursor:"pointer"
  }

  const rentACar=async(id)=>{
    // setT(prevState=>!prevState);
    await addToRent(id);
  }

  useEffect(() => {
    getData().then((res)=>setData(res));
  }, [t,rent,rentACar])
  

  return (
    <div>
      <img src={carAni} style={ImageAni} alt="" />
      <h1 style={heading}>CarRental<span style={headingSpan}>hub</span></h1>
      <Link to={`/add`} style={AddBut}>Add Car for Rent</Link>
      <button style={rentalButtonStyle1} onClick={()=>setRent(prevState=>!prevState)}>Available For Rent</button>
      <button style={rentalButtonStyle2} onClick={()=>setRent(prevState=>!prevState)}>Rented Cars</button>
      <table style={tableStyle}>
        <thead>
          <tr>
            <td style={tdStyleH}>Car Brand</td>
            <td style={tdStyleH}>Car Model</td>
            <td style={tdStyleH}>Car Number</td>
            <td style={tdStyleH}>Owner Name</td>
            <td style={tdStyleH}>Rent</td>
          </tr>
        </thead>
        <tbody>
          {
            data.length>0&&data.map(el=>{
              if(el.rented==false&&!rent){
                return <List el={el} rentACar={rentACar}  key={el._id} setT={setT}/>
              }else if(el.rented==true&&rent){
                return <List el={el} rentACar={rentACar}  key={el._id} setT={setT}/>
              }
            })
          }
        </tbody>
      </table>
      {
        data.length==0&&<h3>Loading...</h3>
      }
    </div>
  )
}

export default Home
