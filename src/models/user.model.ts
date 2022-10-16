export interface User {
  id: number;
  name: string;
  email: string;
}

export const userInitialState: User = {
  id: 0,
  name: '',
  email: '',
};
