import { Link } from 'react-router-dom';
import { Rocket, ShieldCheck, Zap, ArrowRight, Star } from 'lucide-react';

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-premium py-5 text-center text-white">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
                Tu Comunidad, Tu <span className="text-warning">Marketplace</span>
              </h1>
              <p className="lead mb-5 opacity-75">
                La plataforma exclusiva para estudiantes y profesores del ITSUR. Compra, vende e intercambia con seguridad en tu entorno educativo.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/catalog" className="btn btn-light btn-lg rounded-pill px-5 fw-bold text-primary shadow">
                  Explorar Ahora
                </Link>
                <Link to="/login" className="btn btn-outline-light btn-lg rounded-pill px-5">
                  Vender algo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold h1">¿Por qué usar Marketplace ITSUR?</h2>
            <div className="bg-primary mx-auto my-3" style={{ width: '60px', height: '4px' }}></div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 text-center p-4 card-hover shadow-sm rounded-4">
                <div className="bg-primary bg-opacity-10 text-primary rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <Rocket size={40} />
                </div>
                <h3 className="h4 fw-bold">Rápido y Fácil</h3>
                <p className="text-muted">Publica tus productos en segundos y llega a miles de compañeros de clase.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 text-center p-4 card-hover shadow-sm rounded-4">
                <div className="bg-success bg-opacity-10 text-success rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <ShieldCheck size={40} />
                </div>
                <h3 className="h4 fw-bold">Comunidad Segura</h3>
                <p className="text-muted">Solo usuarios verificados con correo institucional pueden participar.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 text-center p-4 card-hover shadow-sm rounded-4">
                <div className="bg-warning bg-opacity-10 text-warning rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                  <Zap size={40} />
                </div>
                <h3 className="h4 fw-bold">Ahorro Garantizado</h3>
                <p className="text-muted">Encuentra libros, materiales y gadgets a precios de estudiante.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / CTA */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="glass-card p-5 shadow-sm rounded-5 overflow-hidden position-relative">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="display-5 fw-bold mb-3">¿Listo para empezar?</h2>
                <p className="lead text-muted mb-4">Únete a cientos de estudiantes que ya están aprovechando el Marketplace.</p>
                <Link to="/login" className="btn btn-premium d-inline-flex align-items-center gap-2 shadow-lg">
                  Crear mi cuenta <ArrowRight size={20} />
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="p-4 bg-white rounded-4 text-center shadow-sm">
                      <h4 className="display-6 fw-bold text-primary mb-0">+500</h4>
                      <p className="text-muted mb-0 small">Productos</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-4 bg-white rounded-4 text-center shadow-sm">
                      <h4 className="display-6 fw-bold text-success mb-0">+1.2k</h4>
                      <p className="text-muted mb-0 small">Usuarios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
