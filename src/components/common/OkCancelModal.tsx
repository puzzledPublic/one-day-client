import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface OkCancelModalProp {
  title: string;
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function OkCancelModal({
  title,
  visible,
  onConfirm,
  onCancel
}: OkCancelModalProp) {
  return (
    <Modal visible={visible} onConfirm={onConfirm} onCancel={onCancel}>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <Button color="primary" onClick={onConfirm}>
          확인
        </Button>
        <Button color="secondary" onClick={onCancel}>
          취소
        </Button>
      </div>
    </Modal>
  );
}

export default OkCancelModal;
