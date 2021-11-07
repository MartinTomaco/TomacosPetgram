import React from 'react';
import Context from '../Context';
import { UserForm } from '../componets/UserForm';
import { useRegisterMutation } from '../hooks/useRegisterMutation';
import { useLoginMutation } from '../hooks/useLoginMutatio';

export const NotRegisteredUser = () => {
  const {
    registerMutation,
    data,
    loading: loadingRegister,
    error: errorRegister,
  } = useRegisterMutation();
  const {
    loginMutation,
    loading: loadingLogin,
    error: errorLogin,
  } = useLoginMutation();
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmitRegister = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(({data}) => {
            const { signup } = data
            activateAuth(signup)
          })
        }
        const onSubmitLogin = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          loginMutation({ variables }).then(({data}) => {
            const {login} = data
            activateAuth(login)
          })
        }

        const errorMsg =
          errorRegister && 'El usuario ya existe o hay algún problema.';
        const errorLoginMsg = errorLogin && 'Usuario o contraseña incorrectos.';
        return (
          <>
            <UserForm
              disabled={loadingRegister}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmitRegister}
              loading={loadingRegister}
            />
            <UserForm
              disabled={loadingLogin}
              error={errorLoginMsg}
              title="Iniciar Sesión"
              onSubmit={onSubmitLogin}
              loading={loadingLogin}
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};
