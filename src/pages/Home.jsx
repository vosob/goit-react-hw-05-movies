import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from '../components/Api/Api';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { Title } from './styled/Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [, setIsLoading] = useState(true);
  const location = useLocation();

  const fetchTrendingMovies = async () => {
    try {
      const data = await getTrendingMovies();
      const { results } = data;
      setTrendingMovies(results);
    } catch (error) {
      console.error('Error fetching trending movies:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <Title>Trending Movies</Title>
      <TrendingMovies movies={trendingMovies} location={location} />
    </>
  );
};

export default Home;
