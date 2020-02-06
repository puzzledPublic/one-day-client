import React from "react";
import styled from "styled-components";
import { EditorState } from "draft-js";
import ToolButton from "./ToolButton";
import {
  MdFormatQuote,
  MdFormatListBulleted,
  MdCode,
  MdFormatListNumbered
} from "react-icons/md";

const BlockStyleControlsWrapper = styled.div``;

function BlockStyleControls({
  editorState,
  onToggle
}: {
  editorState: EditorState;
  onToggle: (blockType: string) => void;
}) {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <BlockStyleControlsWrapper>
      {BLOCK_TYPES.map(type => (
        <ToolButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
          icon={type.icon}
        />
      ))}
    </BlockStyleControlsWrapper>
  );
}

const BLOCK_TYPES = [
  {
    label: "H1",
    style: "header-one",
    icon: null
  },
  {
    label: "H2",
    style: "header-two",
    icon: null
  },
  {
    label: "H3",
    style: "header-three",
    icon: null
  },
  {
    label: "H4",
    style: "header-four",
    icon: null
  },
  {
    label: "H5",
    style: "header-five",
    icon: null
  },
  {
    label: "H6",
    style: "header-six",
    icon: null
  },
  {
    label: "Blockquote",
    style: "blockquote",
    icon: <MdFormatQuote />
  },
  {
    label: "UL",
    style: "unordered-list-item",
    icon: <MdFormatListBulleted />
  },
  {
    label: "OL",
    style: "ordered-list-item",
    icon: <MdFormatListNumbered />
  },
  {
    label: "Code Block",
    style: "code-block",
    icon: <MdCode />
  }
];

export default BlockStyleControls;
