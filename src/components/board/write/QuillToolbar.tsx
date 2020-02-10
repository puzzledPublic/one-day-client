import React from "react";

function QuillToolbar() {
  return (
    <div id="toolbar">
      <select defaultValue="normal" className="ql-size">
        <option value="small"></option>
        <option value="normal"></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-image"></button>
      <button className="ql-video"></button>
    </div>
  );
}

export default QuillToolbar;
