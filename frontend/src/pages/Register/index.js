import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Section, Content, Form, City } from './styles';
import logo from '../../assets/logo.svg';

export default function Register() {
  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro na plataforma e ajude pessoas a encontrarem os
            casos da sua ONG
          </p>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Fazer Login
          </Link>
        </Section>

        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <City>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </City>

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
