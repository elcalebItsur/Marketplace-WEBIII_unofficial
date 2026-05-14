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
    <div className="admin-page">
      <div className="row g-4">
        {/* Form Column */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="card-header bg-primary text-white py-2 px-3">
              <h6 className="fw-bold mb-0 d-flex align-items-center gap-2">
                <Plus size={18} /> Nuevo Producto
              </h6>
            </div>
            <div className="card-body p-3">
              <form onSubmit={handleAddProduct}>
                <InputField
                  label="Título"
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
                <div className="mb-3">
                  <label className="form-label small fw-bold text-muted mb-1">Categoría</label>
                  <select 
                    className="form-select form-select-sm rounded-2 py-2" 
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  >
                    <option>Libros</option>
                    <option>Tecnología</option>
                    <option>Electrónica</option>
                    <option>Accesorios</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm small">
                  Guardar Publicación
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* List Column */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="card-header bg-white border-0 py-3 px-3 d-flex justify-content-between align-items-center">
              <h5 className="fw-bold mb-0 d-flex align-items-center gap-2">
                <Package size={20} className="text-primary" /> Tus Productos
              </h5>
              <span className="badge bg-light text-dark border px-2 py-1 rounded-pill small">
                {userProducts.length} Activas
              </span>
            </div>
            
            <div className="table-responsive px-3 pb-3">
              <table className="table table-hover align-middle border-top small">
                <thead className="table-light">
                  <tr>
                    <th className="py-2 border-0">Producto</th>
                    <th className="py-2 border-0 text-end">Precio</th>
                    <th className="py-2 border-0 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {userProducts.map(product => (
                    <tr key={product.id}>
                      <td className="py-2">
                        <div className="d-flex align-items-center gap-2">
                          <div className="bg-light rounded-2" style={{ width: '36px', height: '36px', overflow: 'hidden' }}>
                            {product.image && <img src={product.image} className="w-100 h-100 object-fit-cover" alt="" />}
                          </div>
                          <span className="fw-bold">{product.title}</span>
                        </div>
                      </td>
                      <td className="text-end fw-bold py-2">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="text-center py-2">
                        <div className="d-flex justify-content-center gap-1">
                          <button className="btn btn-light btn-sm rounded-circle border p-1" title="Editar">
                            <Edit size={14} className="text-primary" />
                          </button>
                          <button 
                            className="btn btn-light btn-sm rounded-circle border p-1" 
                            title="Eliminar"
                            onClick={() => handleDelete(product.id)}
                          >
                            <Trash2 size={14} className="text-danger" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
