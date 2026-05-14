import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Store, ShieldCheck } from 'lucide-react';
import InputField from '../components/InputField';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="container-fluid p-0 overflow-hidden" style={{ minHeight: 'calc(100vh - 72px)' }}>
      <div className="row g-0 h-100" style={{ minHeight: 'calc(100vh - 72px)' }}>
        {/* Left Side - Welcome Section (Hidden on mobile) */}
        <div className="col-lg-6 d-none d-lg-flex bg-premium align-items-center justify-content-center text-white p-5">
          <div className="text-center">
            <div className="mb-4 d-inline-block p-4 bg-white bg-opacity-25 rounded-circle shadow-lg">
              <Store size={80} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Marketplace ITSUR</h1>
            <p className="lead opacity-75 mb-4">La red exclusiva para emprendedores universitarios.</p>
            <div className="d-flex align-items-center justify-content-center gap-2 mt-5 opacity-50">
              <ShieldCheck size={20} />
              <span>Solo comunidad institucional verificada</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-light p-4 p-md-5">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '450px' }}>
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-5">
                <h2 className="fw-bold">Bienvenido de nuevo</h2>
                <p className="text-muted">Ingresa tus credenciales institucionales</p>
              </div>

              <form onSubmit={handleSubmit}>
                <InputField
                  label="Correo Institucional"
                  type="email"
                  placeholder="1234@alumnos.itsur.edu.mx"
                  icon={Mail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <InputField
                  label="Contraseña"
                  type="password"
                  placeholder="••••••••"
                  icon={Lock}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label small text-muted" htmlFor="rememberMe">
                      Recordarme
                    </label>
                  </div>
                  <a href="#" className="small text-decoration-none text-primary">¿Olvidaste tu contraseña?</a>
                </div>

                <button type="submit" className="btn btn-premium w-100 mb-4 py-3 shadow">
                  Iniciar Sesión
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted small">
                  ¿No tienes una cuenta?{' '}
                  <Link to="/register" className="fw-bold text-decoration-none text-primary">
                    Regístrate aquí
                  </Link>
                </p>
              </div>

              <div className="mt-5 pt-4 border-top text-center opacity-50">
                <small className="d-flex align-items-center justify-content-center gap-2">
                  <ShieldCheck size={16} />
                  Acceso seguro institucional
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
