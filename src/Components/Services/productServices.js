import axios from "axios";

const getProductsData=async()=>{

    const data=await axios.get(`https://dummyjson.com/products`)
return data
}

export {getProductsData}