import React from 'react';
import Context from '../Context';
import { UserForm } from '../componets/UserForm';
import { useRegisterMutation } from '../hooks/useRegisterMutation';

export const NotRegisteredUser = () => {
  const registerMutation = useRegisterMutation();
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            registerMutation({ variables })
              .then(activateAuth)
          }

          return (
            <>
              <UserForm title='Registrarse' onSubmit={onSubmit} />
              <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
