import { AppStore } from '@/models';
import { StyledLayout } from '@/styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  CreateHomeButton,
  ModifyHomeButton,
  ResetHomeButton,
} from './components';
import { HomeStyledTitle } from './styled-components';
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return (
    <StyledLayout>
      {JSON.stringify(userState)}
      <HomeStyledTitle>Home</HomeStyledTitle>
      <CreateHomeButton />
      <ModifyHomeButton />
      <ResetHomeButton />
    </StyledLayout>
  );
};

export default Home;
