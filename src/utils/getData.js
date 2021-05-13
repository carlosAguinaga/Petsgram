import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = process.env.REACT_APP_API_ID;

export const getPost = async (tagTitle) => {
  const URL = tagTitle
    ? `${BASE_URL}/tag/${tagTitle}/post`
    : `${BASE_URL}/post`;
  const res = await axios.get(URL, {
    headers: { "app-id": APP_ID },
  });
  return res.data;
};

export const getComments = async (id) => {
  const res = await axios.get(`${BASE_URL}/post/${id}/comment`, {
    headers: { "app-id": APP_ID },
  });
  return res.data;
};
