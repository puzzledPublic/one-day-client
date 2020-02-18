import React, { useRef } from "react";
import styled from "styled-components";
import { ArticleMode, READ, EDIT } from "./ArticleTemplate";
import QuillEditor from "../write/QuillEditor";
import QuillToolbar from "../write/QuillToolbar";

interface ArticleBodyProp {
  content: string;
  mode: ArticleMode;
  editorRef: React.RefObject<HTMLDivElement>;
}

function ArticleBody({ content, mode, editorRef }: ArticleBodyProp) {
  return (
    <div>
      {mode == READ && (
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ minHeight: "40rem" }}
        ></div>
      )}
      {mode == EDIT && (
        <>
          <QuillToolbar />
          <QuillEditor editorRef={editorRef} initialHTML={content}/>
        </>
      )}
    </div>
  );
}

export default ArticleBody;
