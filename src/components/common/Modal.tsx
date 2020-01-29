import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, 0.16);
  overflow: hidden;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }
  .content {
    border-top: 1px solid #bebebe;
    margin-top: 16px;
  }
  .content > p {
    padding: 8px;
    font-size: 1.7rem;
    color: #999;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  .button-wrap {
  }
  .button-wrap > button {
    width: 100%;
    background-color: #ad7cef;
    color: white;
    border: none;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.5rem;
  }
`;

function Modal() {
  return (
    <div>
      <ModalOverlay />
      <ModalWrapper>
        <p className="title">모달 타이틀</p>
        <div className="content">
          <p>모달 컨텐츠</p>
        </div>
        <div className="button-wrap">
          <button> 확인 </button>
        </div>
      </ModalWrapper>
    </div>
  );
}

export default Modal;
