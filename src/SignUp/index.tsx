import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss'
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <input type="text" placeholder='Ingrese su nombre' />
        <input type="text" placeholder='Ingrese su email' />
        <input type="text" placeholder='Ingrese su contraseña' />
        <button>Sign Up</button>
        <Link to="/">Iniciar cesion Click aqui!</Link>
      </form>
    </div>
  )
}

export default SignUp