import React from "react";
import Button from "../common/Button";

function CommentForm() {
  return (
    <div>
      <form>
        <textarea
          name="comment"
          style={{ width: "100%", height: "3rem" }}
        ></textarea>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button color="primary">댓글쓰기</Button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
