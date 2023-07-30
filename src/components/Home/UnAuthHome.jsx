import {
  HomeTitle,
  AppLogo,
  ContactsLogo,
  HomeWrapper,
  HomeTextWrapper,
  HomeAuthLinks,
  HomeAuthLinksList,
  HomeDescription,
} from 'pages/Home/Home.styled';

export const UnAuthHome = () => {
  return (
    <HomeWrapper>
      <AppLogo>
        <ContactsLogo size="200px" />
      </AppLogo>
      <HomeTextWrapper>
        <HomeTitle>Welcome to your Marvelous Phonebook!</HomeTitle>
        <HomeDescription>
          Here you can manage your contacts. To use all application functions
          you must be authorized. Let's get started!
        </HomeDescription>
        <HomeAuthLinksList>
          <li>
            <HomeAuthLinks to="login">Sign in</HomeAuthLinks>
          </li>
          <li>
            <HomeAuthLinks to="register">Sign up</HomeAuthLinks>
          </li>
        </HomeAuthLinksList>
      </HomeTextWrapper>
    </HomeWrapper>
  );
};
