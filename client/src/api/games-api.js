import * as request from "../api/requster";
const baseUrl = "http://localhost:3030/jsonstore/games";
export const getAll = () => request.get(baseUrl);
