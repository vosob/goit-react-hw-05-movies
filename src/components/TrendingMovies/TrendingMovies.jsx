import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { format } from 'date-fns';

import { Container, List, ListItem, Item, Icon } from './TrendingMovies.styled';

const TrendingMovies = ({ movies, location }) => {
  const formatDate = movies.reduce((formattedDate, movie) => {
    if (
      formattedDate === null &&
      movie !== undefined &&
      movie.release_date !== undefined
    ) {
      formattedDate = format(movie.release_date, 'dd LLL yyy');
    }
    return formattedDate;
  }, null);

  return (
    <Container>
      <List>
        {movies.map(
          ({ original_title, id }) =>
            original_title !== undefined && (
              <ListItem key={id}>
                <Item
                  as={RouterLink}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  <Icon size={30} />
                  {original_title}, {'Date of release'} {formatDate}
                </Item>
                <Outlet />
              </ListItem>
            )
        )}
      </List>
    </Container>
  );
};

export default TrendingMovies;
