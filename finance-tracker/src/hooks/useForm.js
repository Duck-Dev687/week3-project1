import { useState } from 'react';

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      setFormData(initialValues);
    } else {
      setErrors(validationErrors);
    }
  };

  return { formData, handleChange, handleSubmit, errors };
};

export default useForm;
