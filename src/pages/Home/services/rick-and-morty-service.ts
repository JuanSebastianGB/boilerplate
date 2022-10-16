import { User } from '@/models';
import { rickAndMortyAdapter } from '../adapters';

export const urlRickAndMorty: string =
  'https://rickandmortyapi.com/api/character/2';

export const fetchMorty = async (url: string): Promise<User> =>
  fetch(url)
    .then((response): Promise<any> => response.json())
    .then((response): User => rickAndMortyAdapter(response));
