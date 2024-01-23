import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const APIKEY = 'b13a6e3c9d2e20c10a5994198d76146d';

const getMovieId = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}?api_key=${APIKEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error('Error fetching movie by ID:', error.message);
    throw error;
  }
};

const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`/trending/all/day?api_key=${APIKEY}`);
    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    throw error;
  }
};

const getSearch = async searchQuery => {
  try {
    const { data } = await axios.get(
      `/search/movie?query=${searchQuery}&api_key=${APIKEY}`
    );
    return data;
  } catch (error) {
    console.error('Error fetching search results:', error.message);
    throw error;
  }
};

const getCast = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${APIKEY}`);
    return data;
  } catch (error) {
    console.error('Error fetching cast information:', error.message);
    throw error;
  }
};

const getReviews = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews?api_key=${APIKEY}`);
    return data;
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    throw error;
  }
};

export { getMovieId, getTrendingMovies, getSearch, getCast, getReviews };
