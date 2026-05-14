import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Store, ShieldCheck, UserPlus } from 'lucide-react';
import InputField from '../components/InputField';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
  };

  return (
    <div className="container-fluid p-0 overflow-hidden" style={{ minHeight: 'calc(100vh - 72px)' }}>
      <div className="row g-0 h-100" style={{ minHeight: 'calc(100vh - 72px)' }}>
        {/* Left Side - Info (Hidden on mobile) */}
        <div className="col-lg-6 d-none d-lg-flex bg-premium align-items-center justify-content-center text-white p-5">
          <div className="text-center">
            <div className="mb-4 d-inline-block p-4 bg-white bg-opacity-25 rounded-circle shadow-lg">
              <UserPlus size={80} />
            </div>
            <h1 className="display-4 fw-bold mb-3">Únete a la Red</h1>
            <p className="lead opacity-75 mb-4">Forma parte del marketplace más grande del ITSUR.</p>
            <div className="mt-5 text-start border-start border-4 border-white border-opacity-25 ps-4">
              <p className="mb-2">✅ Compra a tus compañeros</p>
              <p className="mb-2">✅ Vende tus productos o servicios</p>
              <p className="mb-0">✅ Entorno 100% seguro y académico</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-light p-4 p-md-5">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: '450px' }}>
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Crear cuenta</h2>
                <p className="text-muted">Empieza hoy mismo tu emprendimiento</p>
              </div>

              <form onSubmit={handleSubmit}>
                <InputField
                  label="Nombre Completo"
                  type="text"
                  placeholder="Juan Pérez"
                  icon={User}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />

                <InputField
                  label="Correo Institucional"
                  type="email"
                  placeholder="1234@alumnos.itsur.edu.mx"
                  icon={Mail}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />

                <InputField
                  label="Contraseña"
                  type="password"
                  placeholder="••••••••"
                  icon={Lock}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />

                <InputField
                  label="Confirmar Contraseña"
                  type="password"
                  placeholder="••••••••"
                  icon={ShieldCheck}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                />

                <div className="mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms" required />
                    <label className="form-check-label small text-muted" htmlFor="terms">
                      Acepto los términos y condiciones de la plataforma.
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-premium w-100 mb-4 py-3 shadow">
                  Crear Cuenta
                </button>
              </form>

              <div className="text-center">
                <p className="text-muted small">
                  ¿Ya tienes una cuenta?{' '}
                  <Link to="/login" className="fw-bold text-decoration-none text-primary">
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
