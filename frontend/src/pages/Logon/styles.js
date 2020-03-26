import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }

  button {
    width: 100%;
    height: 60px;
    background: #e02041;
    color: #fff;
    border: 0;
    border-radius: 8px;
    font-weight: 700;
    margin-top: 16px;
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

  a {
    width: 100%;
    height: 60px;
    color: #41414d;
    margin-top: 40px;
    display: flex;
    align-items: center;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    margin-right: 20px;
  }
`;
