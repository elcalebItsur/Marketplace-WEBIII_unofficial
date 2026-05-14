import { MapPin, Calendar, Star, ShoppingBag, Clock, Edit3, ShieldCheck } from 'lucide-react';

const Profile = () => {
  return (
    <div className="bg-light min-vh-100">
      {/* Profile Header / Banner */}
      <div className="position-relative" style={{ height: '250px' }}>
        <div 
          className="w-100 h-100 bg-premium" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="w-100 h-100 bg-dark bg-opacity-25"></div>
        </div>
        
        <div className="container position-absolute start-50 translate-middle-x" style={{ bottom: '-60px' }}>
          <div className="d-flex align-items-end justify-content-between px-3">
            <div className="d-flex align-items-end">
              <div 
                className="bg-white p-1 rounded-circle shadow-lg" 
                style={{ width: '120px', height: '120px' }}
              >
                <div className="w-100 h-100 rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fs-1 fw-bold border border-4 border-white">
                  JL
                </div>
              </div>
              <div className="ms-3 mb-2 text-white text-shadow" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                <h1 className="h2 fw-bold mb-0">Jovanny Lobato</h1>
                <p className="mb-0 opacity-75">@jovanny_itsur</p>
              </div>
            </div>
            <button className="btn btn-light rounded-pill px-4 mb-2 shadow-sm d-flex align-items-center gap-2 fw-bold">
              <Edit3 size={18} /> Editar Perfil
            </button>
          </div>
        </div>
      </div>

      <div className="container py-5 mt-5">
        <div className="row">
          {/* Sidebar Info */}
          <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Información</h5>
                <p className="text-muted mb-4">
                  Ingeniería en Sistemas Computacionales | Apasionado por la tecnología y la lectura aplicada al desarrollo web.
                </p>
                
                <div className="d-flex align-items-center gap-2 text-muted mb-3">
                  <MapPin size={18} className="text-primary" />
                  <span>Campus IT SUR</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted mb-4">
                  <Calendar size={18} className="text-primary" />
                  <span>Se unió en Enero 2026</span>
                </div>

                <div className="row g-2 text-center">
                  <div className="col-6">
                    <div className="bg-light p-3 rounded-3">
                      <h4 className="fw-bold mb-0">12</h4>
                      <small className="text-muted">Siguiendo</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-light rounded-3">
                      <h4 className="fw-bold mb-0">45</h4>
                      <small className="text-muted">Seguidores</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 bg-primary text-white overflow-hidden">
              <div className="card-body p-4 position-relative">
                <div className="position-absolute end-0 top-0 p-3 opacity-25">
                  <ShieldCheck size={80} />
                </div>
                <h5 className="fw-bold mb-3">Nivel de Confianza</h5>
                <div className="mb-2 d-flex justify-content-between align-items-center">
                  <span>Vendedor Verificado</span>
                  <span className="fw-bold">85%</span>
                </div>
                <div className="progress bg-white bg-opacity-25" style={{ height: '8px' }}>
                  <div className="progress-bar bg-white" style={{ width: '85%' }}></div>
                </div>
                <p className="small mt-3 mb-0 opacity-75">Tu cuenta institucional está vinculada y verificada.</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-8">
            {/* Seller Stats Card */}
            <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
              <div className="row g-0">
                <div className="col-md-4 border-end">
                  <div className="p-4 text-center">
                    <div className="text-warning mb-2"><Star size={24} fill="currentColor" /></div>
                    <h3 className="fw-bold mb-0">4.8</h3>
                    <small className="text-muted">Calificación</small>
                  </div>
                </div>
                <div className="col-md-4 border-end">
                  <div className="p-4 text-center">
                    <div className="text-success mb-2"><ShoppingBag size={24} /></div>
                    <h3 className="fw-bold mb-0">23</h3>
                    <small className="text-muted">Ventas completadas</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-4 text-center">
                    <div className="text-info mb-2"><Clock size={24} /></div>
                    <h3 className="fw-bold mb-0">&lt; 1h</h3>
                    <small className="text-muted">Respuesta promedio</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <ul className="nav nav-pills mb-4 gap-2" id="profileTabs" role="tablist">
              <li className="nav-item">
                <button className="nav-link active rounded-pill px-4 fw-bold shadow-sm" data-bs-toggle="pill">Publicaciones</button>
              </li>
              <li className="nav-item">
                <button className="nav-link rounded-pill px-4 fw-bold" data-bs-toggle="pill">Guardados</button>
              </li>
              <li className="nav-item">
                <button className="nav-link rounded-pill px-4 fw-bold" data-bs-toggle="pill">Reseñas</button>
              </li>
            </ul>

            {/* Feed Section */}
            <div className="row g-4">
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="h-100 bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center text-muted p-5">
                        <ShoppingBag size={40} />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3">Libros</span>
                          <span className="text-muted small">Hace 2 días</span>
                        </div>
                        <h5 className="fw-bold mb-2">Libro de Matemáticas Avanzadas</h5>
                        <p className="text-muted small mb-3">Ejemplar en excelente estado, sin rayaduras. Ideal para tronco común.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="fw-bold text-primary mb-0">$150.00 MXN</h4>
                          <button className="btn btn-outline-primary btn-sm rounded-pill px-3">Ver detalles</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12 text-center py-4">
                <p className="text-muted">No hay más publicaciones para mostrar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
