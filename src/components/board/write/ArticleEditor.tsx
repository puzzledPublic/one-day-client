import { AtomicBlockUtils, ContentBlock, Editor, EditorState, RichUtils } from "draft-js";
import React, { useState } from "react";
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
  const [mediaInfo, setMediaInfo] = useState({
    showPopup: false,
    urlValue: "",
    urlType: ""
  });

  const confirmMedia = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      mediaInfo.urlType,
      'IMMUTABLE',
      {src: mediaInfo.urlValue}
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      editorState,
      {currentContent: contentStateWithEntity}
    );
    setEditorState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
    setMediaInfo({...mediaInfo, showPopup: false, urlValue: ''});
  }
  const promptForMedia = (type: string) => {
    setMediaInfo({showPopup: true, urlType: type, urlValue: ''});
  }
  const addAudio = () => promptForMedia('audio');
  const addVideo = () => promptForMedia('video');
  const addImage = () => promptForMedia('image');
  const handleKeyCommand = (command: string, editorState: EditorState, eventTimeStamp: number) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  }

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  //TODO:: 미디어 요소 추가하는거 수정 필요. 리렌더링때문에 video image가 계속 주소 요청함.
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
          blockRendererFn={mediaBlockRenderer}
          handleKeyCommand={handleKeyCommand}
        />
      </EditorContainer>
      <button type="button" onMouseDown={addImage}>image</button>
      <button type="button" onMouseDown={addVideo}>video</button>
      {
        mediaInfo.showPopup && <div>
          <input type="text" onChange={(e) => setMediaInfo({...mediaInfo, urlValue: e.target.value})} value={mediaInfo.urlValue}/>
          <button type="button" onMouseDown={confirmMedia}>확인</button>
        </div>
      }
    </EditorWrapper>
  );
}

function mediaBlockRenderer(block: ContentBlock) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }

  return null;
}

const Audio = (props: any) => {
  return <audio controls src={props.src} />;
};

const Image = (props: any) => {
  return <img src={props.src} style={{width: "100%"}}/>;
};

const Video = (props: any) => {
  return <video controls src={props.src} style={{width: "100%"}} />;
};

const Media = (props: any) => {
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  const {src} = entity.getData();
  const type = entity.getType();

  let media;
  if (type === 'audio') {
    media = <Audio src={src} />;
  } else if (type === 'image') {
    media = <Image src={src} />;
  } else if (type === 'video') {
    media = <Video src={src} />;
  }

  return media;
};

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
