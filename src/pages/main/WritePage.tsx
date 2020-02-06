import React from 'react';
import styled from 'styled-components';
import ArticleForm from '../../components/board/write/ArticleForm';

const WritePageBlock = styled.div`
`;

function WritePage() {
    return (<WritePageBlock>
        <ArticleForm />
    </WritePageBlock>);
}

export default WritePage;