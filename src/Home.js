import React, { useEffect, useState } from 'react';
import './App.css'

const Home = () => {
  // 1 Api call
  // 2 make state and store data
  // 3  map on state
  const [storeData, setStoreData] = useState();
  const [search,setSearch] = useState("people");
  // const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let apiKey = 'c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U';
  // let apiUrl = `https://api.pexels.com/v1/search?query=${search}`;
  let apiUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=20`;
  const searchButtonHandler =()=>{
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.photos);
        setStoreData(data.photos);
      });
    }
      useEffect(() => {
        searchButtonHandler()
  }, []);





  return (
    <>
  <div className='search_wrapper'>
<input type='text' onChange={(e)=>setSearch(e.target.value)}/>
<button onClick={searchButtonHandler}>Search</button>

  </div>

      <div className="mainBox_wrapImg">
        {storeData && storeData.map((val) =>
        //  console.log(val)
         <img src={val.src.landscape} className='imgIndividual'/>
         )
         }
      </div>
    </>
  );
};

export default Home;
