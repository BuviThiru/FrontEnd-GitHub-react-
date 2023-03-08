import { useEffect, useState } from 'react';
import { BASE_URL } from './constants';
import paginate from './paginate'

const useFetch = () => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      getUsers();
   }, [])

   async function getUsers() {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setData(paginate(data));
      setIsLoading(false)
   }


   return { data, isLoading }
}
export default useFetch;