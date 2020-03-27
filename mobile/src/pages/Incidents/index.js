import React from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  const incidents = [
    {
      id: 4,
      title: 'Caso 1',
    },
    {
      id: 5,
      title: 'Caso 1',
    },
    {
      id: 6,
      title: 'Caso 1',
    },
  ];

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>0 casos.</HeaderTextBold>
        </HeaderText>
      </Header>
      <Title>Bem Vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <List
        data={incidents}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListIncidents>
            <Property>ONG:</Property>
            <Value>{item.title}</Value>

            <Property>CASO:</Property>
            <Value>Cadelinha atropelada</Value>

            <Property>VALOR:</Property>
            <Value>R$ 120,00</Value>
            <Button onPress={navigateToDetail}>
              <ButtonText>Ver mais detalhes</ButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </Button>
          </ListIncidents>
        )}
      />
    </Container>
  );
}
