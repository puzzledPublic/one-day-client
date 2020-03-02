import React from "react";
import QuillEditor from "../write/QuillEditor";
import QuillToolbar from "../write/QuillToolbar";
import { ArticleMode, EDIT, READ } from "./ArticleTemplate";

interface ArticleBodyProp {
  content: string;
  mode: ArticleMode;
  editorRef: React.RefObject<HTMLDivElement>;
}

function ArticleBody({ content, mode, editorRef }: ArticleBodyProp) {
  return (
    <div>
      {mode === READ && (
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ minHeight: "40rem" }}
        ></div>
      )}
      {mode === EDIT && (
        <>
          <QuillToolbar />
          <QuillEditor editorRef={editorRef} initialHTML={content}/>
        </>
      )}
    </div>
  );
}

export default ArticleBody;
