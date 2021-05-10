import axios from "axios";

export const getPost = async (tagTitle) => {
  const BASE_URL = "https://dummyapi.io/data/api";
  const APP_ID = process.env.REACT_APP_API_ID;

  const URL = tagTitle? `${BASE_URL}/tag/${tagTitle}/post`: `${BASE_URL}/post`
  console.log(URL)

  const res = await axios.get( URL, {
    headers: { "app-id": APP_ID },
  });
  const data = res.data;

  return data;
};

export const getPostComment = async (id) => {
  const BASE_URL = "https://dummyapi.io/data/api";
  const APP_ID = process.env.REACT_APP_API_ID;

  const res = await axios.get(`${BASE_URL}/post/${id}/comment`, {
    headers: { "app-id": APP_ID },
  });
  const data = res.data;

  return data;
};
