import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieId } from '../components/Api/Api';
import { LiaImdb } from 'react-icons/lia';
import { FaArrowLeftLong } from 'react-icons/fa6';

import {
  List,
  LinkItem,
  ListItem,
  Poster,
  Container,
  Title,
  Text,
  SecondTitle,
  UserRating,
  RightContainer,
  BackBtn,
} from './styled/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovie = async id => {
      try {
        const data = await getMovieId(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie(movieId);
  }, [movieId]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <main>
      <LinkItem to={backLink.current}>
        <BackBtn style={{ marginTop: '20px' }} type="button">
          <FaArrowLeftLong
            color="#fff"
            size={30}
            style={{ marginTop: '5px' }}
          />
        </BackBtn>
      </LinkItem>
      {!isLoading && movie.title !== undefined && (
        <>
          <Container>
            <Poster
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt=""
            />
            <RightContainer>
              <Title>{`${movie.title} (${movie.release_date.substr(
                0,
                4
              )})`}</Title>
              <UserRating>
                <LiaImdb size={50} />
                {String(movie.vote_average).substr(0, 3)}
              </UserRating>
              <SecondTitle>Overwiev:</SecondTitle>
              <Text>{movie.overview}</Text>
              <SecondTitle>Genres:</SecondTitle>
              <Text>
                {movie.genres.map(movie => (
                  <span key={movie.id}> {`${movie.name}`}</span>
                ))}
              </Text>
            </RightContainer>
          </Container>

          <List>
            <ListItem>
              <LinkItem to="cast">Cast</LinkItem>
            </ListItem>

            <ListItem>
              <LinkItem to="reviews">Reviews</LinkItem>
            </ListItem>
          </List>

          <Outlet />
        </>
      )}
    </main>
  );
};
export default MovieDetails;
