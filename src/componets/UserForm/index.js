import React from 'react';
import { useInputValue } from '../../hooks/useInitialState';
import { Form, Input, Button, Title, Error } from './styles';

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
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
