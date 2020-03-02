import React from "react";
import { Comment } from "../board/read/ArticleTemplate";
import styled from "styled-components";
import { getWrittenTime } from "../../lib/util";

interface CommentItemProp {
  comment: Comment;
}

const CommentItemBlock = styled.div`
`;

const CommentItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: lightgray;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const CommentItemBody = styled.div`
    padding: 0.5rem 0.5rem;
`;

function CommentItem({ comment }: CommentItemProp) {
  return (
    <CommentItemBlock>
      <CommentItemHeader>
        <div>{comment.member.nickName}</div>
        <div>
          <span>좋아요: {comment.recommend.liked}</span>
          <span>싫어요: {comment.recommend.hate}</span>
          <span>시간: {getWrittenTime(new Date(comment.dates.createdAt))}</span>
        </div>
      </CommentItemHeader>
      <CommentItemBody>{comment.content}</CommentItemBody>
    </CommentItemBlock>
  );
}

export default CommentItem;
