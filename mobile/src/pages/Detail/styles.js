import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Incident = styled.View`
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  margin-top: 30px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: 24px;
`;
export const Value = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  color: #737380;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Actions = styled.View`
  padding: 15px;
  border-radius: 8px;
  background: #fff;
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  color: #13131a;
  font-weight: bold;
`;

export const ContactText = styled.Text`
  font-size: 14px;
  margin-top: 15px;
  color: #737380;
`;

export const Buttons = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButtons = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  width: 48%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
