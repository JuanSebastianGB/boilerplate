import { User } from '@/models';

export const createUserAdapter = (user: any): User => {
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
