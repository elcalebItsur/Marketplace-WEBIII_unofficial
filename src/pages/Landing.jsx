import { Search, Heart, Share2, MessageCircle, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const Landing = () => {
  return (
    <div className="landing-feed">
      <div className="row g-4">
        {/* CENTER FEED */}
        <div className="col-12 col-xl-8">
          {/* Search Header (PC) */}
          <div className="d-none d-lg-flex align-items-center justify-content-between mb-4">
            <h3 className="fw-bold mb-0">Inicio</h3>
            <div className="input-group w-50 shadow-sm rounded-pill overflow-hidden">
              <span className="input-group-text bg-white border-0 ps-3">
                <Search size={18} className="text-muted" />
              </span>
              <input type="text" className="form-control border-0 py-2" placeholder="Buscar en el marketplace..." />
            </div>
          </div>

          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            {PRODUCTS.map(product => (
              <article key={product.id} className="card border-0 shadow-sm rounded-3 mb-4 overflow-hidden">
                <div className="card-header bg-white border-0 pt-3 px-3 d-flex align-items-center gap-2">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}>
                    {product.seller[0]}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold small">{product.seller}</h6>
                    <small className="text-muted" style={{ fontSize: '0.75rem' }}>Hace 10 min · {product.category}</small>
                  </div>
                </div>
                
                <div className="card-body px-3 py-2">
                  <p className="mb-2 small">{product.description}</p>
                  <h5 className="fw-bold text-primary mb-3">${product.price.toFixed(2)}</h5>
                  <img 
                    src={product.image} 
                    className="img-fluid rounded-3 w-100 mb-2" 
                    alt={product.title}
                    style={{ maxHeight: '350px', objectFit: 'cover' }}
                  />
                </div>

                <div className="card-footer bg-white border-top-0 px-3 pb-3">
                  <div className="d-flex border-top pt-2">
                    <button className="btn btn-light flex-grow-1 d-flex align-items-center justify-content-center gap-2 text-muted border-0 py-2 small">
                      <Heart size={18} /> <span>Me gusta</span>
                    </button>
                    <button className="btn btn-light flex-grow-1 d-flex align-items-center justify-content-center gap-2 text-muted border-0 py-2 small">
                      <MessageCircle size={18} /> <span>Comentar</span>
                    </button>
                    <button className="btn btn-light flex-grow-1 d-flex align-items-center justify-content-center gap-2 text-muted border-0 py-2 small">
                      <Share2 size={18} /> <span>Compartir</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR (PC) */}
        <aside className="col-xl-4 d-none d-xl-block">
          <div className="sticky-top" style={{ top: '20px' }}>
            <div className="card border-0 shadow-sm rounded-3 p-3 mb-4">
              <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <TrendingUp size={18} className="text-primary" /> Tendencias
              </h6>
              <div className="list-group list-group-flush gap-2">
                <div className="py-1">
                  <small className="text-muted d-block small" style={{ fontSize: '0.7rem' }}>Libros · Tendencia</small>
                  <strong className="d-block small">#CalculoDiferencial</strong>
                  <small className="text-muted small">45 publicaciones</small>
                </div>
                <div className="py-1">
                  <small className="text-muted d-block small" style={{ fontSize: '0.7rem' }}>Electrónica · Tendencia</small>
                  <strong className="d-block small">#ArduinoUno</strong>
                  <small className="text-muted small">28 publicaciones</small>
                </div>
              </div>
              <button className="btn btn-light btn-sm mt-3 rounded-pill text-primary fw-bold border">Ver más</button>
            </div>

            <div className="card border-0 shadow-sm rounded-3 p-3">
              <h6 className="fw-bold mb-3">Sugerencias</h6>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center fw-bold small" style={{ width: '30px', height: '30px' }}>JR</div>
                  <div>
                    <h6 className="mb-0 fw-bold small">José Ramírez</h6>
                    <small className="text-muted small" style={{ fontSize: '0.7rem' }}>@jose_r12</small>
                  </div>
                </div>
                <button className="btn btn-outline-primary btn-sm rounded-pill px-2 py-0 fw-bold small">Seguir</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Landing;
