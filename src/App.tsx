import { Routes, Route, Link } from 'react-router-dom';
import ApuList from './pages/ApuList';

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100 shadow-sm px-6">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">APU Gen</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li><Link to="/">APUs</Link></li>
            <li><Link to="/catalogos">Catálogos</Link></li>
          </ul>
        </div>
      </div>

      <main className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<ApuList />} />
          {/* Aquí agregaremos luego las rutas de catálogos y creación */}
        </Routes>
      </main>
    </div>
  );
}

export default App;