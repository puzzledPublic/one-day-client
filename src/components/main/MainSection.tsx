import React from 'react';
import styled from 'styled-components';
import BoardTemplate from '../board/BoardTemplate';

const MainSectionBlock = styled.section`
    margin-left: 30px;
    width: 100%;
`;

function MainSection() {
    return (
        <MainSectionBlock>
            <BoardTemplate/>
        </MainSectionBlock>
    )
}

export default MainSection;