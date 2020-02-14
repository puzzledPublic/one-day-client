import React, { useEffect } from "react";
import styled from "styled-components";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import ArticleFooter from "./ArticleFooter";
import Api from "../../../lib/api";
import useRequest from "../../../lib/hook/useRequest";
import { useParams } from "react-router-dom";
import { ArticleDate } from "../BoardTemplate";

interface Article {
  id: number;
  title: string;
  content: string;
  member: Member;
  hits: number;
  dates: ArticleDate;
  recommend: Recommend;
  comments: Array<Comment>;
}

interface Member {
  id: number;
  userName: string;
  nickName: string;
}

interface Comment {}

interface Recommend {
  liked: number;
  hate: number;
}

const ArticleTemplateBlock = styled.div``;

function ArticleTemplate() {
  const { articleId } = useParams<{ articleId: string }>();
  const [getArticleRequest, loading, article, error] = useRequest<Article>(
    Api.board.getArticle
  );

  useEffect(() => {
    const getArticle = async () => {
      try {
        await getArticleRequest(parseInt(articleId));
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, [articleId]);

  //TODO:: 해당 상황에 대한 표시 컴포넌트 필요
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (!article) {
    return <div>not found...</div>;
  }
  return (
    <ArticleTemplateBlock>
      <ArticleHeader
        title={article.title}
        dates={article.dates}
        hits={article.hits}
      />
      <ArticleBody content={article.content} />
      <ArticleFooter />
    </ArticleTemplateBlock>
  );
}

export default ArticleTemplate;
