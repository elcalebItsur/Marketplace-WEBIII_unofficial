import { MapPin, Calendar, Star, ShoppingBag, Clock, Edit3, ShieldCheck } from 'lucide-react';

const Profile = () => {
  return (
    <div className="profile-page">
      {/* Banner */}
      <div className="card border-0 shadow-sm rounded-3 overflow-hidden mb-4">
        <div className="profile-banner"></div>
        <div className="card-body p-3 pt-0">
          <div className="d-flex flex-column flex-md-row align-items-center align-items-md-end gap-3">
            <div className="avatar-wrapper shadow">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold h3 mb-0" style={{ width: '100px', height: '100px', border: '4px solid white' }}>
                JL
              </div>
            </div>
            <div className="flex-grow-1 text-center text-md-start mb-2">
              <h4 className="fw-bold mb-0">Jovanny Lobato</h4>
              <p className="text-muted small mb-0">@jovanny_itsur</p>
            </div>
            <div className="mb-2">
              <button className="btn btn-light btn-sm border rounded-pill px-3 fw-bold d-flex align-items-center gap-2">
                <Edit3 size={16} /> Editar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Sidebar Info */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 mb-3">
            <h6 className="fw-bold mb-3 small text-muted text-uppercase">Información</h6>
            <p className="small mb-3">Sistemas Computacionales | Apasionado por la tecnología y la lectura.</p>
            <div className="d-flex align-items-center gap-2 text-muted small mb-2">
              <MapPin size={14} className="text-primary" /> <span>Campus IT SUR</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-muted small mb-0">
              <Calendar size={14} className="text-primary" /> <span>Enero 2026</span>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 bg-primary text-white p-3">
            <h6 className="fw-bold mb-2 small d-flex align-items-center gap-2">
              <ShieldCheck size={16} /> Confianza
            </h6>
            <div className="progress bg-white bg-opacity-25 mb-1" style={{ height: '6px' }}>
              <div className="progress-bar bg-white" style={{ width: '85%' }}></div>
            </div>
            <small className="opacity-75" style={{ fontSize: '0.7rem' }}>Vendedor Verificado 85%</small>
          </div>
        </div>

        {/* Main Stats */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 mb-4">
            <div className="row g-0 text-center">
              <div className="col-4 py-3 border-end">
                <div className="text-warning mb-1"><Star size={20} fill="currentColor" /></div>
                <h6 className="fw-bold mb-0">4.8</h6>
              </div>
              <div className="col-4 py-3 border-end">
                <div className="text-success mb-1"><ShoppingBag size={20} /></div>
                <h6 className="fw-bold mb-0">23</h6>
              </div>
              <div className="col-4 py-3">
                <div className="text-info mb-1"><Clock size={20} /></div>
                <h6 className="fw-bold mb-0">&lt; 1h</h6>
              </div>
            </div>
          </div>

          <ul className="nav nav-pills nav-fill bg-white p-1 rounded-3 shadow-sm mb-4">
            <li className="nav-item">
              <button className="nav-link active btn-sm py-2 fw-bold">Publicaciones</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-sm py-2">Guardados</button>
            </li>
          </ul>

          <div className="card border-0 shadow-sm rounded-3 p-4 text-center opacity-50">
            <ShoppingBag size={40} className="mb-2 mx-auto" />
            <p className="small mb-0">No hay publicaciones recientes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
