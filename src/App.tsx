import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NotFound } from './pages';
import { store } from './redux';

function App() {
  const Login = lazy((): any => import('@/pages/Login/Login'));
  const Home = lazy((): any => import('@/pages/Home/Home'));
  const NavbarMenu = lazy(
    (): any => import('@/components/NavbarMenu/NavbarMenu')
  );

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Provider store={store}>
        <BrowserRouter>
          <NavbarMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
