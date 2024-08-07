import * as request from "../api/requster";
const baseUrl = "http://localhost:3030/jsonstore/games"; 
const urlForCreating = "http://localhost:3030/data/games"
export const getAll = async () => {
 const result =  await request.get(baseUrl);
 const games  = Object.values(result);
 return games;

};

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`)

 const create = (gameData) => request.post(`${urlForCreating}`,gameData)


const gamesAPI = {
    getOne,
    getAll,
    create

}
export default gamesAPI