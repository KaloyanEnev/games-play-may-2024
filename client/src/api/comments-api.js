import * as requester from "./requester";
const baseUrl = "http://localhost:3030/data/comments";

const create = (gameId, text) => requester.post(baseUrl, { gameId, text });

const getAll = (gameId) => {
  const params = new URLSearchParams({
    where: `gameId="${gameId}"`,
    load : `author=_ownerId:users`
  });
  return requester.get(`${baseUrl}?${params.toString()}`);
};

//  const getAllComments = async (gameId) => {
//   const result = await requester.get(buildUrl(gameId));
//   const comments = Object.values(result);
//   return comments;
// };

const commentsAPI = {
  create,
  getAll,
};
export default commentsAPI;
