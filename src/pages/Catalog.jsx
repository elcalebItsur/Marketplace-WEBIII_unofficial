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
    <div className="catalog-page">
      {/* Search Header */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6 mb-3 mb-md-0">
          <h2 className="fw-bold mb-0">Explorar Productos</h2>
        </div>
        <div className="col-md-6">
          <div className="input-group shadow-sm rounded-pill overflow-hidden">
            <span className="input-group-text bg-white border-0 ps-3">
              <Search size={18} className="text-muted" />
            </span>
            <input 
              type="text" 
              className="form-control border-0 py-2" 
              placeholder="¿Qué estás buscando hoy?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Sidebar Filters */}
        <aside className="col-lg-3 d-none d-lg-block">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden sticky-top" style={{ top: '20px' }}>
            <div className="card-header bg-white border-0 pt-3 px-3">
              <h6 className="fw-bold d-flex align-items-center gap-2 mb-0">
                <Filter size={16} className="text-primary" /> Categorías
              </h6>
            </div>
            <div className="card-body px-2 pb-3">
              <div className="list-group list-group-flush">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    className={`list-group-item list-group-item-action border-0 rounded-2 mb-1 px-3 py-2 small ${selectedCategory === category ? 'active bg-primary' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Categories Mobile (Horizontal Scroll) */}
        <div className="col-12 d-lg-none overflow-auto mb-2">
          <div className="d-flex gap-2 pb-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`btn btn-sm rounded-pill text-nowrap px-3 ${selectedCategory === category ? 'btn-primary' : 'btn-white bg-white border'}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <main className="col-lg-9">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3 g-md-4">
            {filteredProducts.map(product => (
              <div className="col" key={product.id}>
                <div className="card h-100 card-premium overflow-hidden">
                  <div className="position-relative">
                    <img 
                      src={product.image} 
                      className="card-img-top" 
                      alt={product.title}
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    <span className="position-absolute top-0 end-0 m-2 badge bg-white text-dark shadow-sm rounded-pill px-2 py-1 small">
                      {product.condition}
                    </span>
                  </div>
                  <div className="product-card-body d-flex flex-column h-100">
                    <small className="text-primary fw-bold mb-1 d-block" style={{ fontSize: '0.75rem' }}>{product.category}</small>
                    <h6 className="product-title fw-bold mb-2">{product.title}</h6>
                    <div className="mt-auto d-flex justify-content-between align-items-center pt-2">
                      <h5 className="fw-bold text-dark mb-0">${product.price.toFixed(2)}</h5>
                      <div className="d-flex gap-1">
                        <Link to={`/product/${product.id}`} className="btn btn-light btn-sm rounded-circle border p-2" title="Ver detalles">
                          <Eye size={16} />
                        </Link>
                        <button className="btn btn-primary btn-sm rounded-circle p-2" title="Añadir al carrito">
                          <ShoppingCart size={16} />
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
              <Search size={48} className="text-muted mb-3 opacity-50" />
              <h5 className="fw-bold">No hay resultados</h5>
              <p className="text-muted small">Intenta con otros filtros.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Catalog;
