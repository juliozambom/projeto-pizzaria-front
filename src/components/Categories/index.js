import { useState } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SectionTitle } from '../SectionTitle';

import {
  Container,
  Categorie,
  CategoryIcon,
  CategoryTitle,
  CategoriesContainer,
} from './styles';
const categories = [
  {
    icon: 'md-pizza',
    text: 'Pizza',
  },
  {
    icon: 'transgender',
    text: 'Lanche',
  },
  {
    icon: 'md-beer',
    text: 'Bebidas',
  },
  {
    icon: 'ice-cream',
    text: 'Sobremesa',
  },
];

export const Categories = () => {
  const [skillSelected, setSkillSelected] = useState('');

  return (
    <Container>
      <SectionTitle>Categorias</SectionTitle>
      <CategoriesContainer horizontal>
        {categories.map(({ icon, text }) => (
          <Categorie
            key={text}
            onPress={() => setSkillSelected(text)}
            isSelected={text === skillSelected}
          >
            <CategoryIcon>
              <IonIcon name={icon} size={20} />
            </CategoryIcon>
            <CategoryTitle isSelected={text === skillSelected}>
              {text}
            </CategoryTitle>
          </Categorie>
        ))}
      </CategoriesContainer>
    </Container>
  );
};
