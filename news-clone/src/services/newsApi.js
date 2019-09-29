import ApiService from './Api';

const JSON_QUERY = '.json?print=pretty';
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const client = new ApiService({ baseURl: BASE_URL });

const newsApi = {};
const PAGE_LIMIT = 20;

const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

newsApi.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`);
newsApi.getStory = id => client.get(`/item/${id}${JSON_QUERY}`);
newsApi.getStoriesByPage = (ids, page) => {
    const { begin, end } = getPageSlice(PAGE_LIMIT, page);
    const activeIds = getPageValues({ begin, end, items: ids });
    const storyPromises = activeIds.map(id => newsApi.getStory(id));
    return Promise.all(storyPromises);
};

export default newsApi;