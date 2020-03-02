import React from "react";
import { Comment } from "../board/read/ArticleTemplate";
import CommentItem from "./CommentItem";
import styled from "styled-components";

interface CommentListProp {
  comments: Array<Comment>;
}

const CommentListBlock = styled.div`
    margin: 1rem 0;
`;

function CommentList({ comments }: CommentListProp) {
  return (
    <CommentListBlock>
      {comments.map(comment => (
        <CommentItem comment={comment} />
      ))}
    </CommentListBlock>
  );
}

export default CommentList;
