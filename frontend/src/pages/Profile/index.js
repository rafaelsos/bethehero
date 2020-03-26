import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, Header, ListIncidents } from './styles';

import logo from '../../assets/logo.svg';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>

        <Link to="/incidents/new">Cadastrar novo caos</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <ListIncidents>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ListIncidents>
    </Container>
  );
}
