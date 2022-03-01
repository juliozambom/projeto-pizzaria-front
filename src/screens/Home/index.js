import { useContext } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { View, ScrollView } from 'react-native';

import { ThemeContext } from 'styled-components/native';
import { Logo } from '../../components/Logo';
import { Text, Header, Container, Button } from './styles';
import { Categories } from '../../components/Categories';

export const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Header>
        <View
          style={{
            padding: 6,
            backgroundColor: theme.colors.gray[100],
            borderRadius: 8,
          }}
        >
          <Button>
            <IonIcon name="grid-outline" size={24} />
          </Button>
        </View>
        <Logo />
        <View
          style={{
            padding: 6,
            backgroundColor: theme.colors.gray[100],
            borderRadius: 8,
          }}
        >
          <Button>
            <IonIcon name="person-outline" size={24} />
          </Button>
        </View>
      </Header>
      <Categories />
    </Container>
  );
};
