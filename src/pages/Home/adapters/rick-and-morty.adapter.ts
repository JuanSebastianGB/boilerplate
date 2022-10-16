import { ApiUser, User } from '@/models';

export const rickAndMortyAdapter = (user: ApiUser): User => {
  const { id, name, status, species, type, gender } = user;
  return {
    id,
    name,
    status,
    species,
    type,
    gender,
  };
};
