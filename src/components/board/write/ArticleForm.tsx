import { EditorState } from "draft-js";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import Input from "../../common/Input";
import ArticleEditor from "./ArticleEditor";

const ArticleFormBlock = styled.div`
  width: 96rem;
  background-color: white;
  margin: 5rem auto 0;
  padding: 1rem;
  border-radius: 1rem;
  h2 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

function ArticleForm() {
  const [subject, setSubject] = useState<string>('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return (
    <ArticleFormBlock>
      <form>
        <div>
          <h2>제목</h2>
          <Input value={subject} onChange={(e) => setSubject(e.target.value)}/>
        </div>
        <div>
          <h2>내용</h2>
          <ArticleEditor editorState={editorState} setEditorState={setEditorState}/>
        </div>
        <div>
          <Button color="primary">확인</Button>
        </div>
      </form>
    </ArticleFormBlock>
  );
}

export default ArticleForm;
