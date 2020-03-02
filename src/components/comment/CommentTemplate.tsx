import React from "react";
import CommentList from "./CommentList";
import CommentForm from './CommentForm';
import { Comment } from "../board/read/ArticleTemplate";

interface CommentTemplateProp {
    comments: Array<Comment>;
}

function CommentTemplate({comments}: CommentTemplateProp) {
  return (
    <div>
      <CommentList comments={dummy} />
      <CommentForm />
    </div>
  );
}

const dummy = [
  {
    id: 1,
    content: "contents입니다.",
    member: {
      id: 1,
      userName: "admin",
      nickName: "admin"
    },
    recommend: {
      liked: 0,
      hate: 0
    },
    dates: {
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }
  },
  {
    id: 2,
    content: "contents입니다.~",
    member: {
      id: 1,
      userName: "admin",
      nickName: "admin"
    },
    recommend: {
      liked: 0,
      hate: 0
    },
    dates: {
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }
  },
  {
    id: 3,
    content: "contents입니다.~",
    member: {
      id: 1,
      userName: "admin",
      nickName: "admin"
    },
    recommend: {
      liked: 0,
      hate: 0
    },
    dates: {
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }
  },
  {
    id: 4,
    content: "contents입니다.~",
    member: {
      id: 1,
      userName: "admin",
      nickName: "admin"
    },
    recommend: {
      liked: 0,
      hate: 0
    },
    dates: {
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }
  },
  {
    id: 5,
    content: "contents입니다.~",
    member: {
      id: 1,
      userName: "admin",
      nickName: "admin"
    },
    recommend: {
      liked: 0,
      hate: 0
    },
    dates: {
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }
  },
  {
    id: 6,
    content: "contents입니다.~",
    member: {
      id: 1,
      userName: "admin",
      nickName: "admin"
    },
    recommend: {
      liked: 0,
      hate: 0
    },
    dates: {
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }
  },
  {
    id: 7,
    content: "contents입니다.~",
    member: {
      id: 1,
      userName: "admin",
      nickName: "admin"
    },
    recommend: {
      liked: 0,
      hate: 0
    },
    dates: {
      createdAt: new Date().toString(),
      updatedAt: new Date().toString()
    }
  }
];

export default CommentTemplate;
