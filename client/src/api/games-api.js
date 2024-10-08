import * as request from "./requester";
const baseUrl = "http://localhost:3030/data/games";
// might need to add previous url jsonstore/games
const urlForCreating = "http://localhost:3030/data/games";
export const getAll = async () => {
  const result = await request.get(baseUrl);
  const games = Object.values(result);
  return games;
};
const getLatestGames = async () => {
  const urlSearchParams = new URLSearchParams({
    sortBy: '_createdOn desc',
    pageSize: 3,
  });

  const result = await request.get(`${baseUrl}?${urlSearchParams.toString()}`);
  const latestGames = Object.values(result);
  return latestGames;
};

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

const create = (gameData) => request.post(`${baseUrl}`, gameData);
const remove = (gameId) => request.del(`${baseUrl}/${gameId}`);
const update = (gameId, gameData) =>
  request.put(`${baseUrl}/${gameId}`, gameData);

const gamesAPI = {
  getOne,
  getAll,
  create,
  remove,
  update,
  getLatestGames,
};
export default gamesAPI;
