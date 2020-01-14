import React from "react";
import { ArticleItemType } from "../../containers/board/ArticleListContainer";
import styled from "styled-components";

const ArticleItemBlock = styled.div`
  display: flex;
`;

function ArticleItem({ item }: { item: ArticleItemType }) {
  const { id, title, contents } = item;
  return <ArticleItemBlock>
    <div>{title}</div>
    <div>{contents}</div>
    </ArticleItemBlock>;
}

export default ArticleItem;
