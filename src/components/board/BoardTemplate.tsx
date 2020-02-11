import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Api from "../../lib/api";
import useRequest from "../../lib/hook/useRequest";
import ArticleList from "./ArticleList";
import BoardFooter from "./BoardFooter";
import BoardHeader from "./BoardHeader";

const BoardTemplateBlock = styled.div`
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
`;

interface ArticleDate {
  createdAt: string;
  updatedAt: string;
}

export interface ArticleInfo {
  id: number;
  title: string;
  userName: string;
  nickName: string;
  replyCount: number | string;
  hits: number;
  dates: ArticleDate;
}

export type ArticleInfoList = Array<ArticleInfo>;

export interface PageInfo {
  first: boolean;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  empty: boolean;
}

interface BoardInfo {
  articleInfoList: ArticleInfoList;
  pageInfo: PageInfo;
}

function BoardTemplate() {
  const { boardName } = useParams<{ boardName: string }>();
  const [boardInfo, setBoardInfo] = useState<BoardInfo | null>(null);

  const [articleListRequest] = useRequest(Api.board.articleList);

  const getArticleList = async () => {
    try {
      const response = await articleListRequest(boardName);
      setBoardInfo(response.data);
    } catch (error) {
      console.log(error);
      //TODO:: 통신 에러 처리
    }
  };

  useEffect(() => {
    getArticleList();
  }, [boardName]);

  return (
    <BoardTemplateBlock>
      <BoardHeader boardName={boardName} />
      {boardInfo && !boardInfo.pageInfo.empty ? (
        <>
          <ArticleList articleInfoList={boardInfo.articleInfoList} />
          <BoardFooter />{" "}
        </>
      ) : (
        <div>글이 없습니다.</div>
      )}
    </BoardTemplateBlock>
  );
}

export default BoardTemplate;
