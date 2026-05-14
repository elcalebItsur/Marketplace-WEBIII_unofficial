import { useState } from 'react';
import { Plus, Edit, Trash2, FileText, Download, Package } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import InputField from '../components/InputField';

const AdminDashboard = () => {
  const [userProducts, setUserProducts] = useState(PRODUCTS.slice(0, 3));
  const [newProduct, setNewProduct] = useState({ title: '', price: '', category: 'Libros' });

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta publicación?')) {
      setUserProducts(userProducts.filter(p => p.id !== id));
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      ...newProduct,
      price: parseFloat(newProduct.price),
      condition: 'Nuevo',
      seller: 'Yo'
    };
    setUserProducts([product, ...userProducts]);
    setNewProduct({ title: '', price: '', category: 'Libros' });
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row g-4">
          {/* Form Column */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-header bg-premium text-white py-3 px-4">
                <h5 className="fw-bold mb-0 d-flex align-items-center gap-2">
                  <Plus size={20} /> Registrar Producto
                </h5>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleAddProduct}>
                  <InputField
                    label="Título del producto"
                    placeholder="Ej. Libro de Cálculo"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
                    required
                  />
                  <InputField
                    label="Precio (MXN)"
                    type="number"
                    placeholder="0.00"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    required
                  />
                  <div className="mb-4">
                    <label className="form-label small fw-bold text-muted">Categoría</label>
                    <select 
                      className="form-select rounded-3 py-2" 
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    >
                      <option>Libros</option>
                      <option>Tecnología</option>
                      <option>Electrónica</option>
                      <option>Accesorios</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-premium w-100 py-3 fw-bold shadow-sm">
                    Guardar Publicación
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Tools */}
            <div className="card border-0 shadow-sm rounded-4 mt-4">
              <div className="card-body p-4">
                <h6 className="fw-bold mb-3 text-muted">Herramientas de Sistema</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-light text-start d-flex align-items-center gap-2 border">
                    <FileText size={18} className="text-primary" /> Exportar Reporte PDF
                  </button>
                  <button className="btn btn-light text-start d-flex align-items-center gap-2 border">
                    <Download size={18} className="text-success" /> Descargar Historial (CSV)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* List Column */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <div className="card-header bg-white border-0 py-4 px-4 d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0 d-flex align-items-center gap-2">
                  <Package size={24} className="text-primary" /> Tus Publicaciones
                </h4>
                <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                  {userProducts.length} Activas
                </span>
              </div>
              
              <div className="table-responsive px-4 pb-4">
                <table className="table table-hover align-middle border-top">
                  <thead className="table-light">
                    <tr>
                      <th className="py-3 border-0">Producto</th>
                      <th className="py-3 border-0 text-center">Categoría</th>
                      <th className="py-3 border-0 text-end">Precio</th>
                      <th className="py-3 border-0 text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userProducts.map(product => (
                      <tr key={product.id}>
                        <td className="py-3">
                          <div className="d-flex align-items-center gap-3">
                            <div className="bg-light rounded-3" style={{ width: '45px', height: '45px', overflow: 'hidden' }}>
                              {product.image ? (
                                <img src={product.image} className="w-100 h-100 object-fit-cover" alt="" />
                              ) : (
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                                  <Package size={20} />
                                </div>
                              )}
                            </div>
                            <span className="fw-bold">{product.title}</span>
                          </div>
                        </td>
                        <td className="text-center py-3">
                          <span className="badge bg-info bg-opacity-10 text-info px-3 py-2 rounded-pill border border-info border-opacity-25">
                            {product.category}
                          </span>
                        </td>
                        <td className="text-end fw-bold py-3">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="text-center py-3">
                          <div className="d-flex justify-content-center gap-2">
                            <button className="btn btn-light btn-sm rounded-circle border p-2" title="Editar">
                              <Edit size={16} className="text-primary" />
                            </button>
                            <button 
                              className="btn btn-light btn-sm rounded-circle border p-2" 
                              title="Eliminar"
                              onClick={() => handleDelete(product.id)}
                            >
                              <Trash2 size={16} className="text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {userProducts.length === 0 && (
                  <div className="text-center py-5 opacity-50">
                    <Package size={60} className="mb-3" />
                    <p>No tienes publicaciones activas.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
