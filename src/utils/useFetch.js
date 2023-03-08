import {useEffect, useState} from 'react';
import { BASE_URL } from './constants';
 const useFetch = ()=>{
 const [data,setData]= useState([]);
 const [isLoading,setIsLoading] = useState(true)

 useEffect(()=>{
    fetchData();
 },[])

 async function fetchData(){
       const response = await fetch(BASE_URL);
       const data = await response.json();
      setData(data);
      setIsLoading(false)
 }


    return {data,isLoading}
}
export default useFetch;