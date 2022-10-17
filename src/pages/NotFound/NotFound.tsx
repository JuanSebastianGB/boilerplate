import React from 'react';
import { NotFoundLayout } from './styled-components/NotFoundLayout';
export interface NotFoundInterface {}

const NotFound: React.FC<NotFoundInterface> = () => {
  return (
    <NotFoundLayout>
      <h3>Not Found !!!!</h3>
    </NotFoundLayout>
  );
};

export default NotFound;
