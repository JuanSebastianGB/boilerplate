import { modifyUser } from '@/redux/states/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
export interface ModifyHomeButtonInterface {}

const ModifyHomeButton: React.FC<ModifyHomeButtonInterface> = () => {
  const dispatch = useDispatch();
  const handleSendData = (): any =>
    dispatch(modifyUser({ name: 'Test name edited', id: 1 }));
  return <button onClick={handleSendData}>Edit User</button>;
};

export default ModifyHomeButton;
