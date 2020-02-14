import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import BoardTemplate from "../board/BoardTemplate";
import ArticleTemplate from "../board/read/ArticleTemplate";

const MainSectionBlock = styled.section`
  margin-left: 30px;
  flex: 1;
  padding: 20px 30px;
  background-color: white;
  border-radius: 10px;
`;

function MainSection() {
  return (
    <MainSectionBlock>
      <Switch>
        <Route path="/board/:boardName" component={BoardTemplate} />
        <Route path="/article/:articleId" component={ArticleTemplate} />
      </Switch>
    </MainSectionBlock>
  );
}

export default MainSection;
