import React, { useState } from "react";
import styled from "styled-components";

const DropDownWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
`;

const DropDownItemWrapper = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 0.7rem;
  padding: 1rem 0;
  right: 0;
  margin-top: 0.2rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
  width: max-content;
`;

const DropDownItem = styled.div`
  line-height: 1.5;
  padding: 0 1.5rem;
  svg {
      margin-right: 1rem;
  }
  &:hover {
      background-color: #f8f9fc;
  }
`;

const DropDownDivider = styled.div`
  height: 0;
  margin: 1rem 0;
  overflow: hidden;
  border-top: 1px solid #eaecf4;
`;

function DropDown({
  toggleButton,
  children
}: React.PropsWithChildren<{ toggleButton: React.ReactElement }>) {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle(!toggle);
  return (
    <DropDownWrapper>
      <div onClick={onToggle}>{toggleButton}</div>
      <DropDownItemWrapper>{toggle ? children : null}</DropDownItemWrapper>
    </DropDownWrapper>
  );
}

DropDown.Item = DropDownItem;
DropDown.Divider = DropDownDivider;

export default DropDown;
