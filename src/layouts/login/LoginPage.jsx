import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingComponent } from "../../components/LoadignComponent/LoadingComponent";
import { useAuthContext } from "../../context/AuthContexts";
import { useForm } from "../../hooks/forms/useForm";
import './LoginPage.scss'

export const LoginPage = () => {

  const {isAutenticated, login} = useAuthContext();
  

  const { usuario, password,formState, onInputChange } = useForm({
    usuario: '',
    password: ''
  });
  const [err, setErr] = useState(null)

  const inputs = {
    usuario: usuario,
    password: password,
    obtenerToken: true
  }

  const hancleLogin = async (e) => {
    e.preventDefault();
    try {
       await login(inputs);
    } catch (error) {
      setErr(err.response.data);
    }
  }


  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="text"
              id="usuario"
              className="fadeIn second"
              name="usuario"
              value={usuario}
              onChange={onInputChange}

              placeholder="username"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" onClick={ hancleLogin} />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Register
            </a>
          </div>
        </div>
      </div>
    </>
    // <LoadingComponent />
  );
};
