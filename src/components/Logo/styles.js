import styled from 'styled-components';

export const Text = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 32px;
  color: ${({ isRed, theme }) =>
    isRed ? theme.colors.main : theme.colors.black};
  margin-top: 3px;
`;
