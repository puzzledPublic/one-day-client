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

const getArticle = async (articleId: number) => {
  const response = await axios.get(`${baseURL}/article/${articleId}`);
  return response;
}

const editArticle = async (article: Article, articleId: number, accessToken: string) => {
  const response = await axios.put(`${baseURL}/article/${articleId}`, article, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
  return response;
}

const deleteArticle = async (articleId: number, accessToken: string) => {
  const response = await axios.delete(`${baseURL}/article/${articleId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
  return response;
}

export default {
  articleList,
  saveArticle,
  getArticle,
  editArticle,
  deleteArticle,
}
