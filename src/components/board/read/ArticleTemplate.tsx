import React, { useEffect, useState, useRef } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import Api from "../../../lib/api";
import useRequest from "../../../lib/hook/useRequest";
import { DateInfo } from "../BoardTemplate";
import ArticleBody from "./ArticleBody";
import ArticleFooter from "./ArticleFooter";
import ArticleHeader from "./ArticleHeader";
import CommentTemplate from "../../comment/CommentTemplate";

interface Article {
  id: number;
  title: string;
  content: string;
  member: Member;
  hits: number;
  dates: DateInfo;
  recommend: Recommend;
  comments: Array<Comment>;
  boardName: string;
}

interface Member {
  id: number;
  userName: string;
  nickName: string;
}

export interface Comment {
  id: number;
  content: string;
  member: Member;
  recommend: Recommend;
  dates: DateInfo;
}

interface Recommend {
  liked: number;
  hate: number;
}

export const READ = "READ" as const;
export const EDIT = "EDIT" as const;
export type ArticleMode = typeof READ | typeof EDIT;

const ArticleTemplateBlock = styled.div``;

function ArticleTemplate() {
  const [mode, setMode] = useState<ArticleMode>(READ);
  const { articleId } = useParams<{ articleId: string }>();
  const [
    getArticleRequest,
    getLoading,
    article,
    error,
    setArticle
  ] = useRequest<Article>(Api.board.getArticle);

  const [editTitle, setEditTitle] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);
  const [editArticleRequest, editLoading] = useRequest(Api.board.editArticle);

  const onEdit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    if (!(editorRef.current && editorRef.current.firstElementChild)) return;
    const articleParams = {
      articleId,
      editTitle,
      content: editorRef.current.firstElementChild,
      boardName: "edit"
    };
    try {
      await editArticleRequest(
        {
          title: articleParams.editTitle,
          content: articleParams.content.innerHTML,
          boardName: articleParams.boardName
        },
        parseInt(articleParams.articleId),
        accessToken
      );
      if (article) {
        setArticle({
          ...article,
          title: articleParams.editTitle,
          content: articleParams.content.innerHTML
        });
        setMode(READ);
      }
    } catch (error) {
      console.log(error);
      //TODO:: 네트워크, 요청 에러처리.
    }
  };

  const history = useHistory();
  const [deleteArticleRequest, deleteLoading] = useRequest(
    Api.board.deleteArticle
  );
  const onDelete = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    try {
      await deleteArticleRequest(articleId, accessToken);
      if (article) {
        history.replace(`/board/${article.boardName}`);
      } else {
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    if (article) {
      setEditTitle(article.title);
    }
  }, [article]);

  //TODO:: 해당 상황에 대한 표시 컴포넌트 필요
  if (getLoading) {
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
        mode={mode}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
      />
      <ArticleBody
        content={article.content}
        mode={mode}
        editorRef={editorRef}
      />
      <ArticleFooter
        writerName={article.member.userName}
        mode={mode}
        setMode={setMode}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <CommentTemplate comments={article.comments} />
    </ArticleTemplateBlock>
  );
}

export default ArticleTemplate;
