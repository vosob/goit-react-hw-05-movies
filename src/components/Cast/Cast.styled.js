import styled from 'styled-components';

export const CastContainer = styled.ul`
  /* padding-left: 20px; */
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  background-color: #1d1e1f;
  padding-inline-start: 0;
`;

export const Image = styled.img`
  height: 406px;
  width: 271px;
`;

export const List = styled.li`
  list-style: none;
`;

export const Text = styled.p`
  color: white;
  padding-top: 20px;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`;
