import axios from "axios";

export const getPost = async () => {
  const BASE_URL = "https://dummyapi.io/data/api";
  const APP_ID = "609560908005364d9ae4ca67";

  const res = await axios
    .get(`${BASE_URL}/post`, { headers: { "app-id": APP_ID } })
    const data = res.data

    return data
};

