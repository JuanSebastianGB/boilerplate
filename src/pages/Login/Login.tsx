import { createUserAdapter } from '@/adapters';
import useFetchAndLoad from '@/hooks/useFetchAndLoad';
import { AppStore } from '@/models';
import { createUser, modifyUser } from '@/redux/states/userSlice';
import { login } from '@/services/public.service';
import { StyledLayout } from '@/styled-components';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const handleCreate = async (): Promise<void> => {
    const response = await callEndpoint(login());
    dispatch(createUser(createUserAdapter(response.data)));
  };
  const handleModify = (): any =>
    dispatch(modifyUser({ name: 'test name from login', type: 'any' }));

  return (
    <>
      <StyledLayout>
        <pre>{JSON.stringify(userState)}</pre>
        {loading ? (
          <>
            <h3>LOADING...</h3>
          </>
        ) : (
          <Fragment>
            <button onClick={handleCreate}>Create User</button>
            <button onClick={handleModify}>Modify User</button>
          </Fragment>
        )}
      </StyledLayout>
    </>
  );
};

export default Login;
