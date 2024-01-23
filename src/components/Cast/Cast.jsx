import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../Api/Api';
import { CastContainer, Image, List, Text } from './Cast.styled';
import defaultImg from 'defaultImg.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [, setIsLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getCast(movieId);
        const { cast } = data;
        setCast(cast);
      } catch (error) {
        console.error('Error fetching cast:', error.message);
        setError('Error fetching cast data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <CastContainer>
      {cast.map(({ profile_path, id, original_name }) => (
        <List key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : `${defaultImg}`
            }
            alt={original_name}
          />
          <Text>{original_name}</Text>
        </List>
      ))}
    </CastContainer>
  );
};

export default Cast;
