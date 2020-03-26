import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
  margin-right: 30px;

  h1 {
    font-size: 22px;
    margin: 64px 0 32px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 32px;
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

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input,
  textarea {
    margin-top: 8px;
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
`;
