/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;

    height: 60px;
    background: #e02041;
    color: #fff;
    border: 0;
    border-radius: 8px;
    font-weight: 700;

    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;

    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#e04f68')};
    }
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
    &:hover {
      border-color: ${darken(0.03, '#999')};
    }
  }
`;

export const ListIncidents = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border-radius: 4px;
    border: 0;
  }

  button:hover {
    opacity: 0.8;
  }

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    width: 100%;
    max-width: 500px;
    word-wrap: break-word;
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;
