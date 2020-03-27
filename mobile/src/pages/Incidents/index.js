import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import {
  Container,
  Header,
  Image,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  List,
  ListIncidents,
  Property,
  Value,
  Button,
  ButtonText,
} from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page },
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos.</HeaderTextBold>
        </HeaderText>
      </Header>
      <Title>Bem Vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <List
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.5}
        renderItem={({ item: incident }) => (
          <ListIncidents>
            <Property>ONG:</Property>
            <Value>{incident.name}</Value>

            <Property>CASO:</Property>
            <Value>{incident.title}</Value>

            <Property>VALOR:</Property>
            <Value>
              {Intl.NumberFormat('pr-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </Value>
            <Button onPress={() => navigateToDetail(incident)}>
              <ButtonText>Ver mais detalhes</ButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </Button>
          </ListIncidents>
        )}
      />
    </Container>
  );
}
