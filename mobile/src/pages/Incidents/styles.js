import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  padding-top: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image``;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 40px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #737380;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  margin-top: 10px;
`;

export const ListIncidents = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  margin-top: 16px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;
export const Value = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  color: #737380;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
