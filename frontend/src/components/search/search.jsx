import React, { useState } from 'react'
import './search.css'
import axios from 'axios'


const search=()=> {

    const [query,setQuery] = useState('');
    const [results,setResults] = useState([]);

    const handleSearch = async()=>{
        try {
            const response = await axios.get(`http://localhost:4000/api/food/search?search=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error',error);
        }
    }

  return (
    <div>
      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search for Food...' />
      <button onClick={handleSearch}> Search </button>

      <ul>
        {results.map((item)=>(
            <li key={item._Id}>
                {item.name}-{item.description}-${item.price}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default search
