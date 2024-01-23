import { useState, useEffect } from 'react';
import { getSearch } from '../components/Api/Api';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from './styled/Home.styled';
import { FormLabel, Form, Btn, Container } from './styled/Search.styled';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );
  const [, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      getSearchQuery(query);
    } else {
      setMovies([]);
    }
  }, [searchParams]);

  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const getSearchQuery = async name => {
    setIsLoading(true);
    try {
      const data = await getSearch(name);
      const { results } = data;
      if (results.length === 0) {
        toast.warning('No movies found');
      }
      setMovies(results);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const notEmptySearchQuery = searchQuery.trim();
    if (!notEmptySearchQuery) {
      toast.error('Please enter your search query');
      return;
    }
    setSearchParams({ search: notEmptySearchQuery });
  };

  return (
    <>
      <Title>Movie Search</Title>
      <Form onSubmit={handleSubmit}>
        <Container>
          <FormLabel
            onChange={handleInputChange}
            placeholder="Search movie"
            value={searchQuery}
            type="text"
          />

          <Btn type="submit" name="search">
            Search
          </Btn>
        </Container>

        <TrendingMovies movies={movies} location={location} />
      </Form>

      <ToastContainer />
    </>
  );
};
export default Search;
