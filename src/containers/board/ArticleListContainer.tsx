import React, { useState } from 'react';
import ArticleList from '../../components/board/ArticleList';

export interface ArticleItemType {
    id: number,
    title: string;
    contents: string;
}

export type ArticleItemList = Array<ArticleItemType>

const items: ArticleItemList = [
    {id: 1, title: '제목1', contents: '내용1'},
    {id: 2, title: '제목2', contents: '내용2'},
    {id: 3, title: '제목3', contents: '내용3'},
    {id: 4, title: '제목4', contents: '내용4'},
];

function ArticleListContainer() {
  const [articleItems, setArticleItems] = useState<ArticleItemList>(items);
  return (
      <ArticleList articleItems={articleItems}/>
  );
}

export default ArticleListContainer;