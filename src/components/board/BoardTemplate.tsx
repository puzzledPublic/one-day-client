import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Api from "../../lib/api";
import useRequest from "../../lib/hook/useRequest";
import ArticleList from "./ArticleList";
import BoardFooter from "./BoardFooter";
import BoardHeader from "./BoardHeader";

export interface DateInfo {
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
  dates: DateInfo;
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
  boardName: string;
  displayName: string;
  articleInfoList: ArticleInfoList;
  pageInfo: PageInfo;
}

const BoardTemplateBlock = styled.div`
`;

function BoardTemplate() {
  const { boardName } = useParams<{ boardName: string }>();
  const { search } = useLocation();
  const { page } = queryString.parse(search);
  const currentPage =
    page && typeof page === "string" && !isNaN(parseInt(page))
      ? parseInt(page)
      : 1;

  const [articleListRequest, loading, boardInfo, error] = useRequest<BoardInfo>(Api.board.articleList);

  useEffect(() => {
    const getArticleList = async () => {
      try {
        await articleListRequest(boardName, currentPage - 1);
      } catch (error) {
        console.log(error);
        //TODO:: 통신 에러 처리..? useRequest의 error를 핸들링 해야할듯
      }
    };
    getArticleList();
  }, [boardName, currentPage]);

  if(loading) {
    return <div>로딩 중</div>
  }

  if(error) {
    return <div>에러 발생</div>
  }

  if(!boardInfo) {
    return <div>존재하지 않는 게시판입니다.</div>
  }

  return (
    <BoardTemplateBlock>
      <BoardHeader boardDisplayName={boardInfo && boardInfo.displayName} />
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
