import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getReviews } from '../Api/Api';
import { Text, Title, List, Error } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        const data = await getReviews(id);
        const { results } = data;
        setMovieReviews(results);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews(movieId);
  }, [movieId]);
  return (
    <>
      {isLoading ? (
        toast.warning('Loading...')
      ) : movieReviews.length !== 0 ? (
        <ul>
          <Title>Movie Reviews:</Title>
          {movieReviews.map(({ id, author, content }) => (
            <List key={id}>
              <Text
                style={{ color: '#2283dc', fontSize: '22px' }}
              >{`User: ${author}`}</Text>
              <Text>{content}</Text>
            </List>
          ))}
        </ul>
      ) : (
        <Error>We don't have any reviews for this movie.</Error>
      )}
    </>
  );
};

export default Reviews;
