import React from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import PrivacyPolicy from "../auth/PrivacyPolicy";
import Button from "./Button";
import Modal from "./Modal";

interface TermModalProp {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const TermBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 49.3rem;
`;

const TermHeader = styled.div`
  display: flex;
  border-bottom: solid 1px white;
  background-color: #6c63ff;
  ul {
    display: flex;
  }
  li {
    padding: 0 1rem;
    border-right: solid 1px white;
    font-size: 2rem;
    padding: 1rem;
    color: white;
  }

  button {
    margin-left: auto;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #6c63ff;
    display: inline-flex;
    justify-content: center;
    &:hover {
      background-color: gray;
    }
  }
`;

const TermContents = styled.div`
  margin: 2rem;
`;

const TermFooter = styled.div`
  display: flex;
  justify-content: center;
`;

function TermModal({ visible, onConfirm, onCancel }: TermModalProp) {
  return (
    <Modal visible={visible} onConfirm={onConfirm} onCancel={onCancel}>
      <TermBlock>
        <TermHeader>
          <ul>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
          <button onClick={onCancel}>
            <MdClose size="3rem" color="white" />
          </button>
        </TermHeader>
        <TermContents>
          <div style={{ height: "300px", overflowY: "scroll" }}>
            <PrivacyPolicy />
          </div>
        </TermContents>
        <TermFooter>
          <Button color="primary" onClick={onConfirm}>확인</Button>
        </TermFooter>
      </TermBlock>
    </Modal>
  );
}

export default TermModal;
