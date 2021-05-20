import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth.js';
import useForm from '../Hooks/useForm.js';

import LoginFail from './LoginFail';
import { validate, validateToValid } from '../helper/validationRules.js';
import ValidationMessage from './ValidationMessage';
import { ReactComponent as LoginSvg } from '../assets/login.svg';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { ReactComponent as GoogleSvg } from '../assets/google-icon.svg';

function Login() {
  const auth = useAuth();
  const ROOT_URL =
    'https://desolate-ridge-21792.herokuapp.com/https://jupiter.d.greeninvoice.co.il/api/v1/account/login';

  // const [formField, setFormField] = useState({ email: '', password: '' });
  // const [validation, setValidation] = useState({
  //   isFormValid: false,
  //   isEmailValid: null,
  //   isPasswordValid: null,
  //   hasLoginFailed: false,
  // });
  const [showLoginFail, setShowLoginFail] = useState(false);

  if (auth && auth.state.hasLoginFailed) {
    setShowLoginFail(true);
  }

  const { values, errors, handleChange, handleBlur, handleSubmit } = useForm(
    login,
    validate,
    validateToValid
  );

  function login() {
    console.log('No errors, submit callback called!');
    auth.login(ROOT_URL, { email: values.email, password: values.password });
  }

  function loginFailedReset() {
    setShowLoginFail(false);
  }

  // function handleChange(type, e) {
  //   setFormField({ ...formField, [type]: e.target.value });
  //   validateInput(type, true, e);
  // }

  // function validateInput(type, isFocused, e) {
  //   const emailRegex = /\S+@\S+\.\S+/;
  //   if (type === 'email') {
  //     if (
  //       isFocused &&
  //       e.target.value.length > 0 &&
  //       emailRegex.test(e.target.value)
  //     ) {
  //       setValidation((validation) => ({
  //         ...validation,
  //         isEmailValid: true,
  //         isFormValid: validation.isPasswordValid,
  //       }));
  //     }
  //     if (
  //       !isFocused &&
  //       (e.target.value.length === 0 || !emailRegex.test(e.target.value))
  //     ) {
  //       setValidation((validation) => ({
  //         ...validation,
  //         isEmailValid: false,
  //         isFormValid: false,
  //       }));
  //     }
  //   }
  //   if (type === 'password') {
  //     if (isFocused && e.target.value.length >= 6) {
  //       setValidation((validation) => ({
  //         ...validation,
  //         isPasswordValid: true,
  //         isFormValid: validation.isEmailValid,
  //       }));
  //     }
  //     if (!isFocused && e.target.value.length < 6) {
  //       setValidation((validation) => ({
  //         ...validation,
  //         isPasswordValid: false,
  //         isFormValid: false,
  //       }));
  //     }
  //   }
  // }

  return (
    <div>
      {auth && auth.state.isAuthenticated ? (
        <div className='nav-wpr'>
          <nav>
            <ul>
              <li>
                <Link to='/welcome'>Welcome</Link>
              </li>
              <li>
                <Link to='/user-info'>User Info</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div>
          <input className='theme-input' id='themToggle' type='checkbox' />
          <label className='theme-label' htmlFor='themToggle'></label>

          <LogoSvg className='logo-svg' />
          {showLoginFail && <LoginFail resetLoginFail={loginFailedReset} />}

          <div className='login-grid'>
            <form autoComplete='off' onSubmit={handleSubmit} noValidate>
              <h1>היי, טוב לראות אותך</h1>
              <div className='form-groups'>
                <div className={`form-group ${errors?.email ? 'error' : ''}`}>
                  <ValidationMessage
                    value={
                      errors?.email || 'כתובת המייל איתה נרשמת לחשבונית ירוקה'
                    }
                    inputType='email'
                  />
                  <input
                    className='form-input'
                    id='email'
                    name='email'
                    type='email'
                    placeholder=' '
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <label className='form-label' htmlFor='email'>
                    מייל
                  </label>
                </div>
                <div
                  className={`form-group ${errors?.password ? 'error' : ''}`}
                >
                  <ValidationMessage
                    value={errors?.password}
                    inputType='password'
                  />
                  <input
                    className='form-input'
                    id='password'
                    name='password'
                    type='password'
                    placeholder=' '
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <label className='form-label' htmlFor='password'>
                    סיסמה
                  </label>
                </div>
              </div>
              <div className='btn-group'>
                <button
                  disabled={
                    errors?.email ||
                    errors?.password ||
                    (auth && auth.state.isLoading)
                  }
                  className='form-btn btn-primary'
                >
                  {auth && auth.state.isLoading ? (
                    <span className='spinner'></span>
                  ) : (
                    <span>כניסה</span>
                  )}
                </button>
                <button className='form-btn btn-secondary' type='button'>
                  <span>כניסה עם גוגל</span>
                  <GoogleSvg className='google-svg' />
                </button>
              </div>
            </form>
            <div className='login-svg-wpr'>
              <LoginSvg className='login-svg' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
