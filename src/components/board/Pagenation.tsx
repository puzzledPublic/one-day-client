import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

const PagenationBlock = styled.div`
  display: flex;
  overflow: hidden;
  ul {
    display: flex;
    text-align: center;
    li {
      font-size: 1.4rem;
      width: 40px;
      height: 30px;
      line-height: 30px;
      border-left: 1px solid #bbb;
      border-top: 1px solid #bbb;
      border-bottom: 1px solid #bbb;
      :last-child {
        border-right: 1px solid #bbb;
      }
      transition: all 0.3s;
      :hover {
        background-color: #efefef;
      }
    }
  }
  div {
    border-top: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    :first-child {
      border-left: 1px solid #bbb;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    :last-child {
      border-right: 1px solid #bbb;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    transition: all 0.3s;
    :hover {
      background-color: #efefef;
    }
  }
  div > svg {
    width: 20px;
    height: 100%;
  }
`;

function Pagenation({ pageCount = 5 }: { pageCount?: number }) {
  const {pathname} = useLocation();
  return (
    <PagenationBlock>
      <div>
        <MdKeyboardArrowLeft />
      </div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <div>
        <MdKeyboardArrowRight />
      </div>
    </PagenationBlock>
  );
}

export default Pagenation;
