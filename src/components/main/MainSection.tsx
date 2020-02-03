import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import BoardTemplate from '../board/BoardTemplate';

const MainSectionBlock = styled.section`
    margin-left: 30px;
    flex: 1;
`;

function MainSection() {
    return (
        <MainSectionBlock>
            <Switch>
                <Route path="/board/:boardName" component={BoardTemplate}/>
            </Switch>
        </MainSectionBlock>
    )
}

export default MainSection;