import React from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Button,
  Incident,
  Property,
  Value,
  Actions,
  Title,
  ContactText,
  Buttons,
  ActionButtons,
  TextButton,
} from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();

  function navigateToIncidents() {
    navigation.goBack();
  }

  function sendMail() {}

  function sendWhatsApp() {}

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <Button onPress={navigateToIncidents}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </Button>
      </Header>

      <Incident>
        <Property style={{ marginTop: 0 }}>ONG:</Property>
        <Value>dasdasdas</Value>

        <Property>CASO:</Property>
        <Value>Cadelinha atropelada</Value>

        <Property>VALOR:</Property>
        <Value>R$ 120,00</Value>
      </Incident>

      <Actions>
        <Title>Salve o dia!</Title>
        <Title>Seja o héroi desse caso.</Title>

        <ContactText>Entre em contato</ContactText>

        <Buttons>
          <ActionButtons>
            <TextButton>WhatsApp</TextButton>
          </ActionButtons>
          <ActionButtons>
            <TextButton>E-mail</TextButton>
          </ActionButtons>
        </Buttons>
      </Actions>
    </Container>
  );
}
