import { useState, useEffect } from 'react';

const useForm = (loginCallback, validate, validateToValid) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      loginCallback();
    }
  }, []);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleBlur = (event) => {
    setErrors(validate(values));
  };

  const handleChange = (event) => {
    // event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    if (errors?.[event.target.name]) {
      setErrors(validateToValid(event.target.name, event.target.value, errors));
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
  };
};

export default useForm;
