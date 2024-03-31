import api from '../../services/api';
import { useEffect, useState } from 'react';

interface itemsType {
  name: string,
  collectionURI: string
}

interface urlType {
  type: string,
  url: string
}

interface ResponseData {
  comics: {
    available: number,
    collectionURI: string,
    items: Array<itemsType>,
    returned: number, 
  },
  events: {
    available: number,
    collectionURI: string,
    items: Array<itemsType>,
    returned: number
  },
  description: string,
  id: string,
  modified: string,
  resourceURI: string,
  name: string,
  series: {
    available: number,
    collectionURI: string,
    items: Array<itemsType>,
    returned: number
  },
  stories: {
    available: number,
    collectionURI: string,
    items: Array<itemsType>,
    returned: number
  },
  thumbnail: {
    extension: string,
    path: string,
  },
  urls: Array<urlType>
}

const Characters = () => {
  const [characters, setCharacters] = useState<ResponseData[]>([]);
  
  useEffect(() => {
    api
      .get("/characters")
      .then(response => {
        setCharacters(response.data.data.results)
      })
      .catch(err => console.log(err))
      // .finally(() => console.log("characters: ", characters))
  }, [characters]);


  return (
    <>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <span>{character.name}</span>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`${character.name} ilustração`}/>
              <span className='description'>{character.description ? character.description : "Não Possui descrição" }</span>
            </li>
          )
        })}
      </ul>
    </>
    
  )
}

export default Characters;