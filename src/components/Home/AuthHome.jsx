import {
  HomeTitle,
  HomeWrapper,
  HomeTextWrapper,
  HomeAuthLinks,
  HomeAuthLinksList,
  HomeDescription,
  UserLogo,
  UserName,
  UserEmail,
} from 'pages/Home/Home.styled';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getUserEmail, getUserName } from 'redux/authSelectors';

export const AuthHome = () => {
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);

  return (
    <HomeWrapper>
      <UserLogo>
        <FaUserCircle size="200px" />
        <UserName>{userName}</UserName>
        <UserEmail>{userEmail}</UserEmail>
      </UserLogo>
      <HomeTextWrapper>
        <HomeTitle> Hello! Welcome to your homepage!</HomeTitle>
        <HomeDescription>
          Manage your contacts on "Contacts" page
        </HomeDescription>
        <HomeAuthLinksList>
          <li>
            <HomeAuthLinks to="contacts">Contacts</HomeAuthLinks>
          </li>
        </HomeAuthLinksList>
      </HomeTextWrapper>
    </HomeWrapper>
  );
};
