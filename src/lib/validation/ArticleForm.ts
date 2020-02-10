import {Article, ArticleError} from '../../components/board/write/ArticleForm';
import { isAllValid, isEmptyString, initialInputError } from './InputValidator';

export function validateArticleParams(articleParams: {title: string, content: Element, boardId: number}): [boolean, ArticleError] {
    const {title, content} = articleParams;

    const articleError: ArticleError = {
        title: isEmptyString(title) ? {hasError: true, errorMessage: "공백을 채워주세요."} : initialInputError,
        content: isEmptyString(content.textContent || '') ? {hasError: true, errorMessage: "공백을 채워주세요."} : initialInputError,
        request: initialInputError,
    };

    return [isAllValid(articleError), articleError];
}