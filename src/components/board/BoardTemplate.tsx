import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Api from "../../lib/api";
import useRequest from "../../lib/hook/useRequest";
import ArticleList from "./ArticleList";
import BoardFooter from "./BoardFooter";
import BoardHeader from "./BoardHeader";

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

const BoardTemplateBlock = styled.div`
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
`;

function BoardTemplate() {
  const { boardName } = useParams<{ boardName: string }>();
  const { search } = useLocation();
  const { page } = queryString.parse(search);
  const currentPage =
    page && typeof page === "string" && !isNaN(parseInt(page))
      ? parseInt(page)
      : 1;

  const [boardInfo, setBoardInfo] = useState<BoardInfo | null>(null);
  const [articleListRequest] = useRequest(Api.board.articleList);

  useEffect(() => {
    const getArticleList = async () => {
      try {
        const response = await articleListRequest(boardName, currentPage - 1);
        setBoardInfo(response.data);
      } catch (error) {
        console.log(error);
        //TODO:: 통신 에러 처리
      }
    };
    getArticleList();
  }, [boardName, currentPage]);

  return (
    <BoardTemplateBlock>
      <BoardHeader boardName={boardName} />
      <ArticleList articleInfoList={boardInfo && boardInfo.articleInfoList} />
      <BoardFooter
        currentPage={currentPage}
        pageInfo={boardInfo && boardInfo.pageInfo}
        boardName={boardName}
      />
    </BoardTemplateBlock>
  );
}

export default BoardTemplate;
