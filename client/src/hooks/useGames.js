import { useEffect, useState } from 'react'
import gamesAPI from  '../api/games-api'

export function useGetAllGames(){
    const [games,setGames] = useState([]);
    useEffect(() => {
       gamesAPI.getAll()
       .then(result=> setGames(result))
    },[])
    return [games,setGames]
}
export function useGetOneGames(gameId){
  const [game, setGame] = useState({
    title : '',
    category : '',
    maxLevel : '',
    imageUrl : '',
    summary : ''
});

    useEffect(() => {
        (async () => {
          const result = await gamesAPI.getOne(gameId);
          //  console.log(Object.values(result.comments));
    
          setGame(result);
        })();
      }, [gameId]);
      return[game,setGame]
}
export function useCreateGame(){
const gameCreateHandler = async (gameData) => await gamesAPI.create(gameData)
  // if there are problems remove return await gamesApi but that way gamesApi create doesnt return the game but it creates it





return gameCreateHandler
}