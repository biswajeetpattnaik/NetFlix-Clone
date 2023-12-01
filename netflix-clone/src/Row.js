import React, { useEffect, useState } from 'react'
import instance from './axios';

function Row({title, fetchUrl}) {
  const[movies,setMovies] = useState([]);
  
  useEffect(()=>{
    async function fetchData() {
        const request = await instance.get(fetchUrl);
        console.log(request)
        setMovies(request.data.results);
        return request;
    }
    fetchData();
  },[fetchUrl]);
  
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default Row
