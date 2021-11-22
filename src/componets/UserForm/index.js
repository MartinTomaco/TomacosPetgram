import React from 'react';
import { SubmitButton } from '../SubmitButton';
import { useInputValue } from '../../hooks/useInitialState';
import { Form, Input, Title, Error } from './styles';

export const UserForm = ({ title, onSubmit, error, disabled}) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ 
      email: email.value, 
      password: password.value 
    });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        {/* 
        <input
        placeholder="Email"
        value={email.value}
        onChange={email.onChange}
        /> 
      */}
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input disabled={disabled} placeholder="Password" type="password" {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
