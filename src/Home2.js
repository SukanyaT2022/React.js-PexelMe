import React, { useEffect, useState } from 'react';

const Home = () => {
  // 1 Api call
  // 2 make state and store data
  // 3  map on state
  const [storeData, setStoreData] = useState();
  // const [search,setSearch]=useState();
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let apiKey = 'c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U';
  let apiUrl = `https://api.pexels.com/v1/search?query=people`;

  useEffect(() => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': apiKey,
      },
    })
      .then(response=>response.json())
      .then((data)=>{console.log(data.photos);
        setStoreData(data.photos)})
    }
  ,[]);
  


  // useEffect(()=>{
  // fetch(apiUrl)
  // .then(response => response.json())
  // .then (data => setStoreData(data) )
  // },[])

  return (
<>
<h2>Home</h2>
<div className='mainBox'>
{storeData && storeData.map((val)=>(
  console.log(val)

))}


</div>

</>
  )
};

export default Home;
