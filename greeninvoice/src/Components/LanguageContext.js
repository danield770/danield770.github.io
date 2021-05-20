import React, { createContext } from 'react';

const languages = {
  he: {
    welcome: 'Welcome',
    userInfo: 'User Info',
    hi: 'Hi, nice to see you!',
    emailOk: 'כתובת המייל איתה נרשמת לחשבונית ירוקה',
    email: 'מייל',
    password: 'סיסמה',
    login: 'כניסה',
    loginWithGoogle: 'כניסה עם גוגל',
  },
  en: {},
};

export const LanguageContext = React.createContext({
  text: languages.he,
  toggleLanguage: () => {},
});
