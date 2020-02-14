import axios from "axios";
import { baseURL } from "./index";

const saveComment = async (comment: Comment, accessToken: string) => {
  const response = await axios.post(`${baseURL}/comment`, comment, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response;
};

export default {
  saveComment
};
