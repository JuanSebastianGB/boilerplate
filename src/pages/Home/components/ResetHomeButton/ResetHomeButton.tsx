import { resetUser } from '@/redux/states/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
export interface ResetHomeButtonInterface {}

const ResetHomeButton: React.FC<ResetHomeButtonInterface> = () => {
  const dispatch = useDispatch();
  const handleSendData = (): any => dispatch(resetUser({}));
  return <button onClick={handleSendData}>Reset User</button>;
};

export default ResetHomeButton;
