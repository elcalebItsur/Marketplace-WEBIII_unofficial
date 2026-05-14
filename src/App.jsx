import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path="catalog" element={<div className="container py-5 text-center"><h1>Próximamente: Catálogo</h1></div>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<div className="container py-5 text-center"><h1>404: No encontrado</h1></div>} />
      </Route>
    </Routes>
  );
}

export default App;
