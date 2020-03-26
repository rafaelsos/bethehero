import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Section, Content, Form } from './styles';
import logo from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <Section>
          <img src={logo} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descrever o caso detalhadamente para encontrar um herói para
            resolver isso.
          </p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Section>

        <Form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <button type="submit">Cancelar</button>
          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
