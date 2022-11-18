import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from '../../hooks/forms/useForm';
import { useUser } from '../../hooks/users/useUser';
import stylesRegister from './RegisterPage.module.scss';

export const RegisterPage = () => {

  const { usuario, password,formState, onInputChange } = useForm({
    usuario: '',
    password: ''
  });

  const {Register} = useUser();

  const handleRegister = () => {
    console.log('asd')
    const inputs = {
      usuario: usuario,
      password: password
    }

    Register(inputs)
  }

  return (
    <>
      <div className={`${stylesRegister.wrapper} ${stylesRegister.fadeInDown}`}>
        <div id={stylesRegister.formContent}>
          <div className={`${stylesRegister.fadeIn} ${stylesRegister.first}`}>
            <h1>Register</h1>
          </div>

          <form>
            <input
              type="text"
              id="usuario"
              className={`${stylesRegister.fadeIn} ${stylesRegister.second}`}
              name="usuario"
              placeholder="username"
              value={usuario}
              onChange={onInputChange}
            />
            <input
              type="password"
              id="password"
              className={`${stylesRegister.fadeIn} ${stylesRegister.third}`}
              name="password"
              placeholder="password"
              value={password}
              onChange={onInputChange}
            />
            <button type="button" class="btn btn-primary"  onClick={() => handleRegister()} >Register</button>

          </form>

          <div id="formFooter">
          <NavLink
                className={stylesRegister.underlineHover}
                to="/"
              >
                I have a account
              </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
