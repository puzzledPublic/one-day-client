import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import Input from "../../common/Input";
import QuillEditor from "./QuillEditor";
import QuillToolbar from "./QuillToolbar";
import useRequest from "../../../lib/hook/useRequest";
import { saveArticle } from "../../../lib/api/board";
import { InputError } from "../../../lib/validation/InputValidator";
import { RequestError } from "../../../lib/types";
import { validateArticleParams } from "../../../lib/validation/ArticleForm";

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
  boardId: number;
}

export interface ArticleError extends RequestError {
  [key: string]: InputError;
  title: InputError;
  content: InputError;
}

function ArticleForm() {
  const [title, setTitle] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);
  const [saveArticleRequest, loading] = useRequest(saveArticle);

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
      boardId: 1  //TODO:: boardId, boardName 받아오기
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
          boardId: articleParams.boardId
        },
        accessToken
      );
      //TODO:: 해당 게시판으로 이동 처리.
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
