// import { useEffect, useState } from "react";
import axios from 'axios';


export default function Home() {
 
 let api = 'https://api.themoviedb.org/3/discover/movie/?api_key=affa11ab87c12ef8d989283b0f61bc4f'; 
 console.log(api);


    return (

      <h1> yiffy.ng</h1>
      
      
    )
}
 

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    const apiKey = 'affa11ab87c12ef8d989283b0f61bc4f';
      let resp = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=affa11ab87c12ef8d989283b0f61bc4f');
      
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log(resp.data.results);
    console.log(response);
  });