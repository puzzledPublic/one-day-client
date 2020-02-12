import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import Input from "../../common/Input";
import QuillEditor from "./QuillEditor";
import QuillToolbar from "./QuillToolbar";
import useRequest from "../../../lib/hook/useRequest";
import Api from "../../../lib/api";
import { InputError } from "../../../lib/validation/InputValidator";
import { RequestError } from "../../../lib/types";
import { validateArticleParams } from "../../../lib/validation/ArticleForm";
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string';

const ArticleFormBlock = styled.div`
  width: 96rem;
  background-color: white;
  margin: 5rem auto 0;
  padding: 1rem;
  border-radius: 1rem;
  h2 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

type HTMLString = string;

export interface Article {
  title: string;
  content: HTMLString | null;
  boardName: string;
}

export interface ArticleError extends RequestError {
  [key: string]: InputError;
  title: InputError;
  content: InputError;
  boardName: InputError;
}

function ArticleForm() {
  const history = useHistory();
  const {search} = useLocation();
  const {boardName} = queryString.parse(search);

  const [title, setTitle] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);
  const [saveArticleRequest, loading] = useRequest(Api.board.saveArticle);

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    if (!(editorRef.current && editorRef.current.firstElementChild)) return;
    const articleParams = {
      title,
      content: editorRef.current.firstElementChild,
      boardName: boardName
    };

    const [isAllvaild, articleError] = validateArticleParams(articleParams);
    if (!isAllvaild) {
      //TODO:: validation articleError 처리
      return;
    }

    try {
      await saveArticleRequest(
        {
          title: articleParams.title,
          content: articleParams.content.innerHTML,
          boardName: articleParams.boardName
        },
        accessToken
      );
      history.replace(`/board/${boardName}`);
    } catch (error) {
      console.log(error);
      //TODO:: 네트워크, 요청 에러처리.
    }
  };

  return (
    <ArticleFormBlock>
      <form>
        <div>
          <h2>제목</h2>
          <Input value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <h2>내용</h2>
          <QuillToolbar />
          <QuillEditor editorRef={editorRef} />
        </div>
        <div>
          {loading ? (
            <Button color="secondary">로딩 중</Button>
          ) : (
            <Button color="primary" onClick={onSubmit}>
              확인
            </Button>
          )}
        </div>
      </form>
    </ArticleFormBlock>
  );
}

export default ArticleForm;
