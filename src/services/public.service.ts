import { User } from '@/models';
import { loadAbort } from '@/utilities';
import axios from 'axios';

export const publicUrl = 'https://rickandmortyapi.com/api/character/2';

export const login = () => {
  const controller = loadAbort();
  const { signal } = controller;

  return {
    call: axios.get<User>(publicUrl, { signal }),
    controller,
  };
};
