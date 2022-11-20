import axios from 'axios';

const url=`http://localhost:9090`;

export const getData=async()=>{
    try {
        const data=await axios.get(`${url}/`)
        console.log(data.data);
        return data.data;
    } catch (err) {
        console.log(err);
    }
}

export const postCar=async(data)=>{
    try {
        await axios.post(`${url}/add`,data);
    } catch (err) {
        console.log(err);
    }
}

export const addToRent=async(id)=>{
    try {
        await axios.put(`${url}/rent/${id}`);
    } catch (err) {
        console.log(err);
    }
}