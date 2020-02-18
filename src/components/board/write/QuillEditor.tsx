import Quill from "quill";
import "quill/dist/quill.snow.css";
import React, { useEffect } from "react";

interface QuillEditorProps {
  editorRef: React.RefObject<HTMLDivElement>;
  initialHTML?: string;
}

function QuillEditor({editorRef, initialHTML}: QuillEditorProps) {
  useEffect(() => {
    const quill = new Quill(editorRef.current as Element, {
      theme: "snow",
      modules: {
        toolbar: {
          container: "#toolbar"
        }
      },
      placeholder: "내용을 입력해주세요..."
    });
    if(initialHTML) {
      quill.setContents(quill.clipboard.convert(initialHTML), 'silent');
    }
  }, [editorRef]);

  return (
    <>
      <div ref={editorRef} tabIndex={2} style={{ height: "35rem" }}></div>
    </>
  );
}

export default QuillEditor;
