import axios from "axios";
import { baseURL } from ".";
import { Article } from "../../components/board/write/ArticleForm";

const articleList = async (boardName: string, page: number = 0) => {
  const response = await axios.get(
    `${baseURL}/board/${boardName}?page=${page}`
  );
  return response;
};

const saveArticle = async (article: Article, accessToken: string) => {
  const response = await axios.post(`${baseURL}/article`, article, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
  return response;
};

export default {
  articleList,
  saveArticle
}
