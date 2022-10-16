export interface UserAssociatedUrl {
  name: string;
  url: string;
}

export interface ApiUser {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: UserAssociatedUrl;
  location: UserAssociatedUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const initialUserAssociatedUrl: UserAssociatedUrl = {
  name: '',
  url: '',
};

export const apiUserInitialState: ApiUser = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: initialUserAssociatedUrl,
  location: initialUserAssociatedUrl,
  image: '',
  episode: [],
  url: '',
  created: '',
};

export interface User {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export const userInitialState: User = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
};
