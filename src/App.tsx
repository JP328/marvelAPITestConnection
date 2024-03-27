import { useEffect } from 'react';
import './App.css'
import md5 from "md5";
import axios from 'axios';

function App() {

  const baseUrl = "http://gateway.marvel.com/v1/public/"

  const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;
  const timestamp = Number(new Date());

  const hash = md5(timestamp + privateKey + publicKey); 

  useEffect(() => {
    axios.get(`${baseUrl}characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
      .then(response => console.log(response.data.data.results))
      .catch(err => console.log(err))
  
  }, [hash, publicKey, timestamp])

  return ( 
    <div className='App'> Marvel API </div>  
  )
}

export default App