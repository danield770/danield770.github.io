export function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'חובה למלא את השדה';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'כתובת המייל אינה תקינה';
  }
  if (!values.password) {
    errors.password = 'חובה למלא את השדה';
  } else if (values.password.length < 6) {
    errors.password = 'הסיסמה צריכה לכלול לפחות 6 תווים';
  }
  return errors;
}

export function validateToValid(type, value, errors) {
  if (type === 'email' && value.length > 0 && /\S+@\S+\.\S+/.test(value)) {
    delete errors[type];
    return errors;
  }
  if (type === 'password' && value.length > 5) {
    delete errors[type];
    return errors;
  }
}

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
