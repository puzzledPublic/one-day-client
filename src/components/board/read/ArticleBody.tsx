import React from "react";

interface ArticleBodyProp {
  content: string;
}
//TODO:: 본인 글이라면 삭제버튼 표시.
function ArticleBody({ content }: ArticleBodyProp) {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}

export default ArticleBody;
