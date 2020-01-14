import React from 'react';
import {ArticleItemType} from '../../containers/board/ArticleListContainer';

function ArticleItem({item}: {item: ArticleItemType}) {
  const {id, title, contents} = item;
  return (
    <div>
      {`${id} ${title} ${contents}`}
    </div>
  );
}

export default ArticleItem;