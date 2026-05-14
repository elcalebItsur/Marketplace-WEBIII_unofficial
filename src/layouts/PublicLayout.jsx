import { Outlet, Link } from 'react-router-dom';
import { ShoppingCart, User, LogIn, Store } from 'lucide-react';

const PublicLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-premium">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
            <Store className="me-2 text-primary" size={28} />
            <span>Marketplace <span className="text-primary">ITSUR</span></span>
          </Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/catalog">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/profile">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/admin">Gestión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 position-relative" to="/cart">
                  <ShoppingCart size={20} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link className="btn btn-outline-primary rounded-pill px-4 d-flex align-items-center" to="/login">
                  <LogIn size={18} className="me-2" />
                  Acceder
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-5 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="fw-bold mb-3">Marketplace ITSUR</h5>
              <p className="text-muted">La plataforma oficial para emprendedores del ITSUR. Compra y vende localmente.</p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="fw-bold mb-3">Enlaces Rápidos</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-muted text-decoration-none">Inicio</Link></li>
                <li><Link to="/catalog" className="text-muted text-decoration-none">Catálogo</Link></li>
                <li><Link to="/login" className="text-muted text-decoration-none">Mi Cuenta</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Contacto</h5>
              <p className="text-muted">Email: soporte@itsur.edu.mx</p>
              <p className="text-muted">Tel: (445) 123 4567</p>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="text-center text-muted">
            <small>&copy; {new Date().getFullYear()} Marketplace ITSUR. Todos los derechos reservados.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
