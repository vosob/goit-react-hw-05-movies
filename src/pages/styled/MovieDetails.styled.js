import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Poster = styled.img`
  max-height: 500px;
  border-radius: 5px;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 22px;
`;

export const ListItem = styled.li`
  background-color: #2283dc;
  width: 100px;
  /* height: 40px; */
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 20px;
`;

export const UserRating = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const SecondTitle = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const RightContainer = styled.div`
  width: 800px;
`;

export const BackBtn = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 10px;
  background-color: #2283dc;
  outline: inherit;
  border: none;
  cursor: pointer;
`;
