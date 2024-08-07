import * as request from "./requester";
const baseUrl = "http://localhost:3030/data/games"; 
// might need to add previous url jsonstore/games
const urlForCreating = "http://localhost:3030/data/games"
export const getAll = async () => {
 const result =  await request.get(baseUrl);
 const games  = Object.values(result);
 return games;

};

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`)

 const create = (gameData) =>  request.post(`${baseUrl}`,gameData)
 

 
 


const gamesAPI = {
    getOne,
    getAll,
    create

}
export default gamesAPI