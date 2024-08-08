import * as requester from "./requester";
const baseUrl = "http://localhost:3030/data/comments";

 const create = async (gameId, text) =>
  requester.post(baseUrl, { gameId, text });

 const getAll = async (gameId) => {
const params = new URLSearchParams({
  where : `gameId="${gameId}"`
})
  return await requester.get(`${baseUrl}?${params.toString()}`)
 }
  
//  const getAllComments = async (gameId) => {
//   const result = await requester.get(buildUrl(gameId));
//   const comments = Object.values(result);
//   return comments;
// };

const commentsAPI = {
  create,
  getAll
}
export default commentsAPI