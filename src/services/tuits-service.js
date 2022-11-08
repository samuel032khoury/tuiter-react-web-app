import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
  const tuitContent = tuit["tuit"];
  const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
  };
  const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "title": "new tuit"
  };
  const newtuit = {
    _id: (new Date()).getTime(),
    tuit: tuitContent,
    ...templateTuit,
  };
  const response = await axios.post(TUITS_API, newtuit);
  return newtuit;
}
export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
}
export const deleteTuit = async (tid) => {
  const response = await axios
    .delete(`${TUITS_API}/${tid}`)
  return response.data
}
export const updateTuit = async (tuit) => {
  const response = await axios
    .put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
}