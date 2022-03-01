import styled from 'styled-components';

export const Container = styled.View`
  margin-top: 48px;
`;

export const CategoriesContainer = styled.ScrollView`
  flex-direction: row;
  margin-top: 16px;
`;

export const Categorie = styled.TouchableOpacity`
  border-radius: 32px;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.main : theme.colors.gray[200]};
  padding: 16px 32px;
  margin-right: 16px;
  flex-direction: row;
  align-items: center;
`;

export const CategoryIcon = styled.View`
  margin-right: 8px;
  color: blue;
`;

export const CategoryTitle = styled.Text`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.gray[100] : theme.colors.black};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.poppins[700]};
`;
