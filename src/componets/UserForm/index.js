import React from 'react';
import { useInputValue } from '../../hooks/useInitialState';
import { Form, Input, Button, Title } from './styles';

export const UserForm = ({ title, onSubmit }) => {
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
      <Form onSubmit={handleSubmit}>
        {/* 
        <input
        placeholder="Email"
        value={email.value}
        onChange={email.onChange}
        /> 
      */}
        <Input placeholder="Email" {...email} />
        <Input placeholder="Password" type="password" {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  );
};
