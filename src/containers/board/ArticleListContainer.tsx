import React from "react";
import ArticleList from "../../components/board/ArticleList";
import { ArticleInfoList } from "../../components/board/BoardTemplate";

interface ArticleListContainerProp {
    articleInfoList: ArticleInfoList;
}
function ArticleListContainer({articleInfoList}: ArticleListContainerProp) {

  return (
    <>
      {articleInfoList ? (
        <ArticleList articleInfoList={articleInfoList} />
      ) : (
        <div>글이 없습니다.</div>
      )}
    </>
  );
}

export default ArticleListContainer;
