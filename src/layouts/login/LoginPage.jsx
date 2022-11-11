import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoadingComponent } from "../../components/LoadignComponent/LoadingComponent";
import { useAuthContext } from "../../context/AuthContexts";
import { useForm } from "../../hooks/forms/useForm";
import styles from'./LoginPage.module.scss'

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
    } catch (err) {
      console.log(err)
      setErr(err.response.data);
    }
  }


  return (
    <>
      <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
        <div id={styles.formContent}>
          <div className="fadeIn first">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              id={styles.icon}
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="text"
              id="usuario"
              className={`${styles.fadeIn} ${styles.second}`}
              name="usuario"
              value={usuario}
              onChange={onInputChange}

              placeholder="username"
            />
            <input
              type="password"
              id="password"
              className={`${styles.fadeIn} ${styles.third}`}
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="password"
            />
            <input type="submit" className={`${styles.fadeIn} ${styles.fourth}`} value="Log In" onClick={ hancleLogin} />
          </form>

          <div id="formFooter">
            <NavLink
                className={styles.underlineHover}
                to="/register"
              >
                Register
              </NavLink>
           
          </div>
        </div>
      </div>
    </>
    // <LoadingComponent />
  );
};
