import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Terms } from "../../lib/data/Terms";

interface TermModalProps {
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
  border-bottom: solid 1px rgba(160,160,160,0.3);
  div {
    padding: 0 1rem;
    border-right: solid 1px rgba(160,160,160,0.3);
  }

  div > h2 {
      font-size: 2rem;
  }

  button {
    margin-left: auto;
    outline: none;
    border: none;
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    border-radius: 3rem;
    background-color: white;
    display: inline-flex;
    justify-content: center;
    &:hover {
      background-color: gray;
    }
  }
`;

const TermContents = styled.div`
    padding: 2rem;
`;

const TermFooter = styled.div``;

function TermModal({ visible, onConfirm, onCancel }: TermModalProps) {
  return (
    <Modal visible={visible} onConfirm={onConfirm} onCancel={onCancel}>
      <TermBlock>
        <TermHeader>
          <div>
            <h2>이용약관</h2>
          </div>
          <div>
            <h2>개인정보처리방침</h2>
          </div>
          <button>
            <MdClose />
          </button>
        </TermHeader>
        <TermContents>
          <div>이용약관</div>
          <div style={{height: "300px",overflow: "scroll"}}>{Terms.PrivacyPolicy}</div>
        </TermContents>
        <TermFooter></TermFooter>
      </TermBlock>
    </Modal>
  );
}

export default TermModal;
