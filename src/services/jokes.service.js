import axios from 'axios';

const baseUrl = 'https://api.chucknorris.io';

export const getJokesCategories = async () => {
  const response = await axios.get(baseUrl + '/jokes/categories');
  return response.data;
};

export const getSearchResult = async (searchQuery) => {
  const response = await axios.get(baseUrl + '/jokes/search', {
    params: { query: searchQuery },
  });
  return response.data;
};
