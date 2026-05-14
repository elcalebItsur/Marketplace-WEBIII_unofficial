import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ChevronLeft, ShoppingCart, MessageCircle, User, ShieldCheck, MapPin } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold">Producto no encontrado</h2>
        <Link to="/catalog" className="btn btn-primary rounded-pill px-4 mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container-fluid px-4">
        {/* Breadcrumb / Back button */}
        <nav className="mb-4">
          <Link to="/catalog" className="text-decoration-none text-muted d-flex align-items-center gap-2">
            <ChevronLeft size={18} /> Regresar al catálogo
          </Link>
        </nav>

        <div className="row g-4">
          {/* Product Images */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <img 
                src={product.image} 
                className="img-fluid w-100" 
                alt={product.title}
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
              <div className="card-body p-3">
                <div className="row g-2">
                  {[1, 2, 3].map(i => (
                    <div className="col-3" key={i}>
                      <img 
                        src={product.image} 
                        className="img-fluid rounded-3 opacity-50 cursor-pointer" 
                        alt="Thumbnail"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-3 d-inline-block w-auto" style={{ width: 'fit-content' }}>
                {product.category}
              </span>
              <h1 className="fw-bold h2 mb-2">{product.title}</h1>
              <p className="text-muted d-flex align-items-center gap-2 mb-4">
                <ShieldCheck size={16} className="text-success" /> Condición: <span className="fw-bold text-dark">{product.condition}</span>
              </p>
              
              <h2 className="display-5 fw-bold text-dark mb-4">${product.price.toFixed(2)} <small className="fs-6 text-muted fw-normal">MXN</small></h2>

              <div className="d-grid gap-3 mb-5">
                <button className="btn btn-premium py-3 fw-bold d-flex align-items-center justify-content-center gap-2">
                  <ShoppingCart size={20} /> Comprar Ahora
                </button>
                <button className="btn btn-outline-primary py-3 fw-bold d-flex align-items-center justify-content-center gap-2">
                  <MessageCircle size={20} /> Contactar al Vendedor
                </button>
              </div>

              <h5 className="fw-bold mb-3 border-bottom pb-2">Descripción</h5>
              <p className="text-muted mb-0">{product.description}</p>
            </div>

            {/* Seller Info */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-4">Información del Vendedor</h5>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-5" style={{ width: '60px', height: '60px' }}>
                  {product.seller.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h6 className="fw-bold mb-1">{product.seller}</h6>
                  <div className="d-flex align-items-center gap-3 text-muted small">
                    <span className="d-flex align-items-center gap-1"><User size={14} /> Estudiante Verificado</span>
                    <span className="d-flex align-items-center gap-1"><MapPin size={14} /> Campus IT SUR</span>
                  </div>
                </div>
              </div>
              <hr className="my-4 opacity-5" />
              <Link to="/profile" className="btn btn-light w-100 rounded-pill fw-bold">Ver perfil completo</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
