import * as requester from "./requster";
const baseUrl = "http://localhost:3030/jsonstore/games";
const buildUrl = (gameId) => {
  return `${baseUrl}/${gameId}/comments`;
};
export const create = async (gameId, username, text) =>
  requester.post(buildUrl(gameId), { username, text });

export const getAll = async (gameId) => {
  const result = await requester.get(buildUrl(gameId));
  const comments = Object.values(result);
  return comments;
};
export const getAllComments = async (gameId) => {
  const result = await requester.get(buildUrl(gameId));
  const comments = Object.values(result);
  return comments;
};

export default {
  create,
  getAll
}