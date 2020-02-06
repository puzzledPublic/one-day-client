import axios from 'axios';
import { baseURL } from '.';

const articleList = async (boardName: string, page: number = 0) => {
    const response = await axios.get(`${baseURL}/board/${boardName}?page=${page}`);
    return response;
}
