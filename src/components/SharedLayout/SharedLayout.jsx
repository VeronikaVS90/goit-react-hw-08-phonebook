import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  AppLogo,
  MainWrapper,
  ContactsLogo,
  LogoWrapper,
  LoadingIcon,
} from './SharedLayout.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSelectors';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { ToastContainer } from 'react-toastify';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Header>
        <LogoWrapper to="/">
          <AppLogo>
            <ContactsLogo size="50px" />
          </AppLogo>
          <h2>Marvelous Phonebook</h2>
        </LogoWrapper>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </Header>
      <MainWrapper>
        <Suspense fallback={<LoadingIcon size="150px" />}>
          <Outlet />
        </Suspense>
      </MainWrapper>
      <ToastContainer />
    </Container>
  );
};
