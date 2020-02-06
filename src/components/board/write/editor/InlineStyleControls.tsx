import React from "react";
import styled from "styled-components";
import { EditorState } from "draft-js";
import ToolButton from "./ToolButton";
import { MdFormatBold, MdFormatItalic, MdFormatUnderlined } from "react-icons/md";

const InlineStyleControlsWrapper = styled.div`
  margin-top: 0.5rem;
`;

function InlineStyleControls({
  editorState,
  onToggle
}: {
  editorState: EditorState;
  onToggle: (inlineStyle: string) => void;
}) {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <InlineStyleControlsWrapper>
      {INLINE_STYLES.map(type => (
        <ToolButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
          icon={type.icon}
        />
      ))}
    </InlineStyleControlsWrapper>
  );
}

const INLINE_STYLES = [
  {
    label: "Bold",
    style: "BOLD",
    icon: <MdFormatBold/>
  },
  {
    label: "Italic",
    style: "ITALIC",
    icon: <MdFormatItalic/>
  },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon: <MdFormatUnderlined/>
  }
];

export default InlineStyleControls;
