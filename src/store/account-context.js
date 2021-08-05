import { createContext, useState } from 'react';

const AccountContext = createContext({
  name: '',
  email: '',
  photoUrl: '/static/mock-images/avatars/avatar_default.jpg',
  setName: (accountName) => {},
  setEmail: (accountEmail) => {}
});

export function AccountContextProvider(props) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [url, setUrl] = useState('');

  function setNameHandler(accountName) {
    setUserName(accountName);
  }

  function setEmailHandler(accountEmail) {
    setUserEmail(accountEmail);
  }

  const context = {
    name: userName,
    email: userEmail,
    photoUrl: '/static/mock-images/avatars/avatar_default.jpg',
    setName: setNameHandler,
    setEmail: setEmailHandler
  };

  return <AccountContext.Provider value={context}>{props.children}</AccountContext.Provider>;
}

export default AccountContext;
