import styled from 'styled-components';
import { PiFilmSlateThin } from 'react-icons/pi';

export const Container = styled.div`
  padding: 10px;
`;

export const Icon = styled(PiFilmSlateThin)`
  position: relative;
  right: 6px;
  top: 5px;
  z-index: 1;
  opacity: 0.7;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  text-align: center;
`;

export const ListItem = styled.li`
  display: flex;
  display: list-item;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;

  list-style: none;

  :hover {
    color: #2283dc;
    transition: color 0.2s ease;
  }
`;

export const Item = styled.a`
  text-decoration: none;
  color: white;
  font-size: 22px;
  padding: 5px;
`;
