import React from 'react';
import './RegisterPage.scss'

export const RegisterPage = () => {
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Register</h1>
          </div>

          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="username"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Register" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              i have a account
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
