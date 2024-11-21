import { FormEvent } from 'react';
import styles from './styles.module.scss'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input type="text" placeholder='Ingrese su email' />
          <input type="text" placeholder='Ingrese su contraseña' />
          <button>Login</button>
          <Link to="/sign-up">Registrarse Click aqui!</Link>
        </form>
    </div>
  )
}

export default Login