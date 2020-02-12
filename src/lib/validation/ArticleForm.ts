import { ArticleError } from "../../components/board/write/ArticleForm";
import { initialInputError, isAllValid, isEmptyString } from "./InputValidator";

export function validateArticleParams(articleParams: {
  title: string;
  content: Element;
  boardName: string | string[] | null | undefined;
}): [boolean, ArticleError] {
  const { title, content, boardName } = articleParams;

  const articleError: ArticleError = {
    title: isEmptyString(title)
      ? { hasError: true, errorMessage: "공백을 채워주세요." }
      : initialInputError,
    content: isEmptyString(content.textContent || "")
      ? { hasError: true, errorMessage: "공백을 채워주세요." }
      : initialInputError,
    boardName: !isStringType(boardName)
        ? { hasError: true, errorMessage: "잘못된 접근 입니다." }
        : initialInputError,
    request: initialInputError
  };

  return [isAllValid(articleError), articleError];
}

function isStringType(type: any) {
    return typeof type === 'string';
}
