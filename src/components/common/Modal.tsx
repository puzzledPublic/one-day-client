import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import ReactDOM from "react-dom";

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(500px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(700px);
  }
`;

const ModalOverlay = styled.div<{ disappear: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ModalWrapper = styled.div<{ disappear: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, 0.16);
  overflow: hidden;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

interface ModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function Modal({
  visible,
  onConfirm,
  onCancel,
  children
}: React.PropsWithChildren<ModalProps>) {
  const [localVisible, setLocalVisible] = useState(visible);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  const modalRoot = document.getElementById("modal-root");

  if ((!animate && !localVisible) || !modalRoot) return null;

  return ReactDOM.createPortal(
    <>
      <ModalOverlay disappear={!visible} onClick={onCancel}/>
      <ModalWrapper disappear={!visible}>
        {children}
      </ModalWrapper>
    </>,
    modalRoot
  );
}

export default Modal;
