import { Routes, Route, Link } from 'react-router-dom';
import ApuList from './pages/ApuList';
import ApuForm from './pages/ApuForm'; // Importar el nuevo formulario

function App() {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="navbar bg-base-100 shadow-sm px-6">
                {/* ... Navbar se mantiene igual ... */}
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

            <main className="max-w-7xl mx-auto py-8"> {/* Agregado padding vertical */}
                <Routes>
                    <Route path="/" element={<ApuList />} />
                    <Route path="/apus/nuevo" element={<ApuForm />} /> {/* Nueva Ruta */}
                </Routes>
            </main>
        </div>
    );
}

export default App;