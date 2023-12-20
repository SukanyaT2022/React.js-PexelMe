import React, { useEffect, useState } from 'react';

const Home = () => {
  //1 Api call
  // 2 make state and store data
  //3  map on state
  const [storeData, setStoreData] = useState();
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
  let apiKey = 'aDqsslCfk5JIQEOOEt6vuuQT09wCJ5lkWCBXpo3roYnoCvi2WPMIvZF7';
  // let apiUrl = 'http://api.pexels.com/v1/curated?per_page=10&page=1';
  let apiUrl = "https://api.pexels.com/v1/search?query=people&per_page=20";

  function apiCall(){
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': apiKey,
      },
    })
      .then(response=>response.json())
      .then(data=> console.log(data))
    }

  useEffect(() => {
     apiCall() 
  }, []);


  // useEffect(()=>{
  // fetch(apiUrl)
  // .then(response => response.json())
  // .then (data => setStoreData(data.) )
  // },[])

  return (
  <div>Hello</div>
  )
};

export default Home;
