import { createUser } from '@/redux/states/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
export interface CreateHomeButtonInterface {}

const CreateHomeButton: React.FC<CreateHomeButtonInterface> = () => {
  const dispatch = useDispatch();
  const handleSendData = (): any =>
    dispatch(createUser({ name: 'Test name', id: 1 }));
  return <button onClick={handleSendData}>Create User</button>;
};

export default CreateHomeButton;
