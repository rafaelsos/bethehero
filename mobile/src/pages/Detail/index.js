import React from 'react';
import { Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

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
  const route = useRoute();

  const { incident } = route.params;

  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com ${Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`;

  function navigateToIncidents() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?phone=+55${incident.whatsapp}&text=${message}`
    );
  }

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
        <Value>
          {incident.name} de {incident.city} - {incident.uf}
        </Value>

        <Property>CASO:</Property>
        <Value>{incident.title}</Value>

        <Property>VALOR:</Property>
        <Value>
          {Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value)}
        </Value>
      </Incident>

      <Actions>
        <Title>Salve o dia!</Title>
        <Title>Seja o héroi desse caso.</Title>

        <ContactText>Entre em contato</ContactText>

        <Buttons>
          <ActionButtons>
            <TextButton onPress={sendWhatsApp}>WhatsApp</TextButton>
          </ActionButtons>
          <ActionButtons onPress={sendMail}>
            <TextButton>E-mail</TextButton>
          </ActionButtons>
        </Buttons>
      </Actions>
    </Container>
  );
}
