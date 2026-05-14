import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Landing from './pages/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Landing />} />
        {/* Futuras rutas se añadirán aquí */}
        <Route path="catalog" element={<div className="container py-5 text-center"><h1>Próximamente: Catálogo</h1></div>} />
        <Route path="login" element={<div className="container py-5 text-center"><h1>Próximamente: Acceso</h1></div>} />
        <Route path="*" element={<div className="container py-5 text-center"><h1>404: No encontrado</h1></div>} />
      </Route>
    </Routes>
  );
}

export default App;
