import { createUser } from '@/redux/states/userSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMorty, urlRickAndMorty } from '../../services';
export interface CreateHomeButtonInterface {}

const CreateHomeButton: React.FC<CreateHomeButtonInterface> = () => {
  const [morty, setMorty] = useState({});

  const getMorty = async (): Promise<void> => {
    const result = await fetchMorty(urlRickAndMorty);
    setMorty(result);
  };
  useEffect((): void => {
    getMorty();
  }, []);
  const dispatch = useDispatch();
  const handleSendData = (): any => dispatch(createUser(morty));
  return <button onClick={handleSendData}>Create User</button>;
};

export default CreateHomeButton;
