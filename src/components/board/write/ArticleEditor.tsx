import React, { useState } from "react";
import { Editor, EditorState, RichUtils, ContentBlock } from "draft-js";
import styled from "styled-components";
import BlockStyleControls from "./editor/BlockStyleControls";
import InlineStyleControls from "./editor/InlineStyleControls";

interface ArticleEditorProps { 
  editorState: EditorState;
  setEditorState: React.Dispatch<React.SetStateAction<EditorState>>;
}

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border-radius: 1rem;
  border: 1px solid #ccc;
`;

const EditorContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  /* box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17); */
  min-height: 9rem;
`;

const StyleControlsWrapper = styled.div`
  border-bottom: 1px solid #ccc;
`;

function ArticleEditor({ editorState, setEditorState }: ArticleEditorProps) {

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <EditorWrapper>
      <StyleControlsWrapper>
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
      </StyleControlsWrapper>
      <EditorContainer>
        <Editor
          placeholder="내용을 입력해주세요..."
          editorState={editorState}
          onChange={setEditorState}
          blockStyleFn={customBlockStyleFn}
        />
      </EditorContainer>
    </EditorWrapper>
  );
}

//현재 전역으로 h1~h6, ul, li가 초기화가 돼서 에디터 내부 html의 요소 스타일을 다시 지정해줘야한다.
//해당 style block type에 따라 className을 지정해준다. (className에 대한 스타일은 index.css 파일에 저장중 draft-*)
function customBlockStyleFn(contentBlock: ContentBlock) {
  const type = contentBlock.getType();
  switch (type) {
    case "header-one":
      return "draft-h1";
    case "header-two":
      return "draft-h2";
    case "header-three":
      return "draft-h3";
    case "header-four":
      return "draft-h4";
    case "header-five":
      return "draft-h5";
    case "header-six":
      return "draft-h6";
    case "blockquote":
      return "draft-blockquote";
    case "unordered-list-item":
      return "draft-unordered-list-item";
    case "ordered-list-item":
      return "draft-ordered-list-item";
    default:
      return "";
  }
}
export default ArticleEditor;
