import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const PaginationBlock = styled.div`
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

      a {
        display: inline-block;
        width: 100%;
      }
    }
  }
  div {
    cursor: pointer;
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
  a > svg {
    width: 20px;
    height: 100%;
  }
`;

interface PaginationProp {
  currentPage: number;
  totalPages: number;
  pageWidth?: number;
}

function Pagination({
  currentPage,
  totalPages,
  pageWidth = 5
}: PaginationProp) {
  const { pathname } = useLocation();

  const startPage = (Math.ceil(currentPage / pageWidth) - 1) * pageWidth + 1;
  let endPage = (Math.ceil(currentPage / pageWidth) - 1 + 1) * pageWidth;
  if (endPage > totalPages) {
    endPage = totalPages;
  }

  const prev = startPage !== 1;
  const next = endPage !== totalPages;
  const prevPage = startPage - 1;
  const nextPage = endPage + 1;

  const pageNums = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNums.push(i);
  }

  return (
    <PaginationBlock>
      {prev && (
        <div>
          <Link to={`${pathname}?page=${prevPage}`}><MdKeyboardArrowLeft /></Link>
        </div>
      )}
      <ul>
        {pageNums.map(pageNum => (
          <li key={pageNum}>
            <Link to={`${pathname}?page=${pageNum}`}>{pageNum}</Link>
          </li>
        ))}
      </ul>
      {next && (
        <div>
          <Link to={`${pathname}?page=${nextPage}`}><MdKeyboardArrowRight /></Link>
        </div>
      )}
    </PaginationBlock>
  );
}

export default Pagination;
