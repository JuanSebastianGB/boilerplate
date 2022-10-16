import { StyledLayout } from '@/styled-components';
import React from 'react';
import {
  CreateHomeButton,
  ModifyHomeButton,
  ResetHomeButton,
} from './components';
import { HomeStyledTitle } from './styled-components';
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <StyledLayout>
      <HomeStyledTitle>Home</HomeStyledTitle>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
    </StyledLayout>
  );
};

export default Home;
