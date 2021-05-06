import React, { useEffect } from 'react';

function LoginFail(props) {
  useEffect(() => {
    const id = setTimeout(() => {
      props.resetLoginFail();
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  });
  return (
    <div className='login-fail'>
      מייל או סיסמה לא נכונים
      <button type='button' onClick={props.resetLoginFail}>
        Close
      </button>
    </div>
  );
}

export default LoginFail;
