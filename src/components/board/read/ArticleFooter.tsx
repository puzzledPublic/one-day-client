import React, { useState } from "react";
import styled from "styled-components";
import { useAuthenticated } from "../../../lib/hook/useAuthenticated";
import Button from "../../common/Button";
import OkCancelModal from "../../common/OkCancelModal";
import { ArticleMode, EDIT, READ } from "./ArticleTemplate";

interface ArticleFooterProp {
  writerName: string;
  mode: ArticleMode;
  setMode: React.Dispatch<React.SetStateAction<ArticleMode>>;
  onEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDelete: () => void;
}

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonLeftBlock = styled.div``;
const ButtonRightBlock = styled.div``;

function ArticleFooter({
  writerName,
  mode,
  setMode,
  onEdit,
  onDelete
}: ArticleFooterProp) {
  const [isLogined, loginUser] = useAuthenticated();
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <ButtonBlock>
        <ButtonLeftBlock>
          <Button color="dark">목록으로</Button>
        </ButtonLeftBlock>
        <ButtonRightBlock>
          {(isLogined &&
            loginUser &&
            loginUser.username === writerName &&
            mode === READ && (
              <>
                <Button color="secondary" onClick={() => setMode(EDIT)}>
                  수정
                </Button>
                <Button color="warning" onClick={() => setVisible(true)}>
                  삭제
                </Button>
                <OkCancelModal
                  title="삭제하시겠습니까?"
                  visible={visible}
                  onConfirm={() => {
                    onDelete();
                    setVisible(false);
                  }}
                  onCancel={() => setVisible(false)}
                ></OkCancelModal>
              </>
            )) ||
            (mode === EDIT && (
              <>
                <Button color="primary" onClick={onEdit}>
                  확인
                </Button>
                <Button color="secondary" onClick={() => setMode(READ)}>
                  취소
                </Button>
              </>
            ))}
        </ButtonRightBlock>
      </ButtonBlock>
    </div>
  );
}

export default ArticleFooter;
