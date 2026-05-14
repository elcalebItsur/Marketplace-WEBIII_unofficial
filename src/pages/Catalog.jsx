import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ShoppingCart, Eye } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-light min-vh-100">
      {/* Search Header */}
      <div className="bg-white border-bottom py-4 mb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <h1 className="fw-bold h2 mb-0">Explorar Productos</h1>
            </div>
            <div className="col-md-6">
              <div className="input-group shadow-sm rounded-pill overflow-hidden">
                <span className="input-group-text bg-white border-0 ps-4">
                  <Search size={20} className="text-muted" />
                </span>
                <input 
                  type="text" 
                  className="form-control border-0 py-3" 
                  placeholder="¿Qué estás buscando hoy?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row">
          {/* Sidebar Filters */}
          <aside className="col-lg-3 mb-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden sticky-top" style={{ top: '100px' }}>
              <div className="card-header bg-white border-0 pt-4 px-4">
                <h5 className="fw-bold d-flex align-items-center gap-2">
                  <Filter size={18} className="text-primary" /> Categorías
                </h5>
              </div>
              <div className="card-body px-2 pb-4">
                <div className="list-group list-group-flush">
                  {CATEGORIES.map(category => (
                    <button
                      key={category}
                      className={`list-group-item list-group-item-action border-0 rounded-3 mb-1 px-4 py-2 ${selectedCategory === category ? 'active bg-primary' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              {filteredProducts.map(product => (
                <div className="col" key={product.id}>
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden card-hover">
                    <div className="position-relative">
                      <img 
                        src={product.image} 
                        className="card-img-top" 
                        alt={product.title}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <span className="position-absolute top-0 end-0 m-3 badge bg-white text-dark shadow-sm rounded-pill px-3 py-2">
                        {product.condition}
                      </span>
                    </div>
                    <div className="card-body p-4">
                      <small className="text-primary fw-bold mb-1 d-block">{product.category}</small>
                      <h5 className="card-title fw-bold mb-3 line-clamp-2" style={{ height: '3rem' }}>{product.title}</h5>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <h4 className="fw-bold text-dark mb-0">${product.price.toFixed(2)}</h4>
                        <div className="d-flex gap-2">
                          <Link to={`/product/${product.id}`} className="btn btn-outline-light border text-dark btn-sm rounded-circle p-2 shadow-sm" title="Ver detalles">
                            <Eye size={18} />
                          </Link>
                          <button className="btn btn-primary btn-sm rounded-circle p-2 shadow-sm" title="Añadir al carrito">
                            <ShoppingCart size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-5">
                <div className="mb-4 text-muted opacity-25">
                  <Search size={80} />
                </div>
                <h3 className="fw-bold">No encontramos productos</h3>
                <p className="text-muted">Prueba con otra categoría o término de búsqueda.</p>
                <button className="btn btn-primary rounded-pill px-4 mt-3" onClick={() => {setSearchTerm(''); setSelectedCategory('Todos');}}>
                  Ver todos los productos
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
