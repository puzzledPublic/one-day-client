import React, { useState } from 'react';
import ArticleList from '../../components/board/ArticleList';

export interface ArticleItemType {
    id: number,
    title: string;
    contents: string;
    time: string;
    nickName: string;
    views: number | string;
}

export type ArticleItemList = Array<ArticleItemType>

const items: ArticleItemList = [
    {id: 1, title: '제목1', contents: '내용1', time: '01-14', nickName: 'nickname', views:2},
    {id: 2, title: '제목2', contents: '내용2', time: '08: 25', nickName: 'nickname', views:2532},
    {id: 3, title: '제목3', contents: '내용3', time: '01-14', nickName: 'nickname', views:2532},
    {id: 4, title: '제목4', contents: '내용4', time: '01-14', nickName: 'nickname', views:2},
    {id: 1, title: '제목1', contents: '내용1', time: '01-14', nickName: 'nickname', views:2324523},
    {id: 2, title: '제목2', contents: '내용2', time: '08: 25', nickName: 'nickname12', views:2},
    {id: 3, title: '제목3', contents: '내용3', time: '01-14', nickName: 'nickname1423', views:2523},
    {id: 4, title: '제목4', contents: '내용4', time: '01-14', nickName: 'nickname123', views:2523},
    {id: 1, title: '제목1', contents: '내용1', time: '01-14', nickName: 'nickname412312', views:2},
    {id: 2, title: '제목2', contents: '내용2', time: '08: 25', nickName: 'nickname321', views:2324},
    {id: 3, title: '제목3', contents: '내용3', time: '01-14', nickName: 'nickname314', views:223},
    {id: 4, title: '제목4', contents: '내용4', time: '12분전', nickName: 'nickname123321', views:222},
];

function ArticleListContainer() {
  const [articleItems, setArticleItems] = useState<ArticleItemList>(items);
  return (
      <ArticleList articleItems={articleItems}/>
  );
}

export default ArticleListContainer;