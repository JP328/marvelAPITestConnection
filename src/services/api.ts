import md5 from "md5";
import axios from "axios";

const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;

const timestamp = Number(new Date());

const hash = md5(timestamp + privateKey + publicKey); 

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: timestamp,
    apikey: publicKey,
    hash 
  },
});

export default api;