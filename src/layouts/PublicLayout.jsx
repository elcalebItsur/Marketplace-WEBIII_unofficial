import { Outlet, NavLink, Link } from 'react-router-dom';
import { Home, ShoppingBag, User, PlusCircle, Store, Bell, Search, LayoutGrid, Menu } from 'lucide-react';

const PublicLayout = () => {
  return (
    <div className="layout-wrapper">
      {/* MOBILE HEADER - Only visible < 992px */}
      <header className="mobile-header d-lg-none shadow-sm px-3 d-flex align-items-center justify-content-between">
        <Link className="d-flex align-items-center fw-bold text-decoration-none text-dark" to="/">
          <Store className="me-2 text-primary" size={24} />
          <span className="small">Marketplace ITSUR</span>
        </Link>
        <div className="d-flex gap-3">
          <Search size={20} className="text-muted" />
          <Bell size={20} className="text-muted" />
        </div>
      </header>

      {/* SIDEBAR - Only visible >= 992px */}
      <nav className="side-nav d-none d-lg-flex flex-column">
        <div className="mb-5 px-2">
          <Link className="d-flex align-items-center fw-bold text-decoration-none text-dark" to="/">
            <Store className="me-2 text-primary" size={32} />
            <span className="h5 mb-0">Marketplace <span className="text-primary">ITSUR</span></span>
          </Link>
        </div>

        <div className="flex-grow-1">
          <NavLink to="/" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <Home size={22} />
            <span>Inicio</span>
          </NavLink>
          <NavLink to="/catalog" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <ShoppingBag size={22} />
            <span>Explorar</span>
          </NavLink>
          <NavLink to="/admin" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <LayoutGrid size={22} />
            <span>Gestión</span>
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}>
            <User size={22} />
            <span>Perfil</span>
          </NavLink>
        </div>

        <div className="mt-auto pt-4 border-top">
          <Link to="/admin" className="btn btn-premium w-100 py-3 d-flex align-items-center justify-content-center gap-2">
            <PlusCircle size={20} />
            <span>Publicar</span>
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <div className="main-content-wrapper">
        <div className="container-fluid py-4 px-3 px-md-4">
          <Outlet />
        </div>
      </div>

      {/* BOTTOM NAV - Only visible < 992px */}
      <nav className="bottom-nav d-lg-none d-flex align-items-center justify-content-around shadow-lg">
        <NavLink to="/" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-primary' : 'text-muted'}`}>
          <Home size={24} />
        </NavLink>
        <NavLink to="/catalog" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-primary' : 'text-muted'}`}>
          <ShoppingBag size={24} />
        </NavLink>
        <Link to="/admin" className="btn btn-primary rounded-circle p-2 text-white shadow-lg" style={{ marginTop: '-35px', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justify: 'center' }}>
          <PlusCircle size={28} />
        </Link>
        <NavLink to="/profile" className={({ isActive }) => `text-decoration-none ${isActive ? 'text-primary' : 'text-muted'}`}>
          <User size={24} />
        </NavLink>
        <a href="#" className="text-decoration-none text-muted">
          <Bell size={24} />
        </a>
      </nav>
    </div>
  );
};

export default PublicLayout;
