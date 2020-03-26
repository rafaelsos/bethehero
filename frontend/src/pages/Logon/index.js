import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Section } from './styles';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <Section>
        <img src={logo} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button type="submit">Entrar</button>

          <a href="/registes">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
