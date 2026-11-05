import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ApuForm() {
    const navigate = useNavigate();

    // Estado base para la cabecera (Process)
    const [header, setHeader] = useState({
        serviceRequest: '',
        companyId: '',
        mainProcess: '',
        description: '',
        power: '',
        serial: '',
        brand: '',
        location: '',
        itemQuantity: 1,
        performance: 1,
        socialLawsPercentage: 2.6964, // 269.64% por defecto
        adminPercentage: 0.15,      // 15% por defecto
        utilityContingencyPercentage: 0.15 // 15% por defecto
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setHeader(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="p-6 bg-base-100 rounded-box shadow max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Crear Nuevo APU</h1>

            {/* --- SECCIÓN 1: DATOS GENERALES --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 border-b pb-8">
                <div className="form-control">
                    <label className="label"><span className="label-text font-bold">Solicitud (ID)*</span></label>
                    <input type="text" name="serviceRequest" value={header.serviceRequest} onChange={handleInputChange} className="input input-bordered" placeholder="Ej: SR-2026-001" required />
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text font-bold">Empresa (ID)*</span></label>
                    {/* Aquí luego conectaremos un Select con el catálogo de empresas */}
                    <input type="text" name="companyId" value={header.companyId} onChange={handleInputChange} className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text font-bold">Proceso Principal*</span></label>
                    <input type="text" name="mainProcess" value={header.mainProcess} onChange={handleInputChange} className="input input-bordered" placeholder="Ej: Rebobinado Motor" required />
                </div>

                <div className="form-control md:col-span-2 lg:col-span-3">
                    <label className="label"><span className="label-text font-bold">Descripción del Servicio*</span></label>
                    <input type="text" name="description" value={header.description} onChange={handleInputChange} className="input input-bordered w-full" required />
                </div>
            </div>

            {/* --- SECCIÓN 2: ESPECIFICACIONES (Opcionales) --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 border-b pb-8">
                <div className="form-control">
                    <label className="label"><span className="label-text">Potencia</span></label>
                    <input type="text" name="power" value={header.power} onChange={handleInputChange} className="input input-bordered input-sm" />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text">Serial</span></label>
                    <input type="text" name="serial" value={header.serial} onChange={handleInputChange} className="input input-bordered input-sm" />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text">Marca</span></label>
                    <input type="text" name="brand" value={header.brand} onChange={handleInputChange} className="input input-bordered input-sm" />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text">Ubicación</span></label>
                    <input type="text" name="location" value={header.location} onChange={handleInputChange} className="input input-bordered input-sm" />
                </div>
            </div>

            {/* --- SECCIÓN 3: VARIABLES DE CÁLCULO --- */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                <div className="form-control">
                    <label className="label"><span className="label-text font-bold">Cantidad</span></label>
                    <input type="number" name="itemQuantity" value={header.itemQuantity} onChange={handleInputChange} className="input input-bordered" step="0.01" />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text font-bold text-primary">Rendimiento*</span></label>
                    <input type="number" name="performance" value={header.performance} onChange={handleInputChange} className="input input-bordered border-primary" step="0.01" required />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text">% Leyes Soc.</span></label>
                    <input type="number" name="socialLawsPercentage" value={header.socialLawsPercentage} onChange={handleInputChange} className="input input-bordered" step="0.01" />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text">% Admin.</span></label>
                    <input type="number" name="adminPercentage" value={header.adminPercentage} onChange={handleInputChange} className="input input-bordered" step="0.01" />
                </div>
                <div className="form-control">
                    <label className="label"><span className="label-text">% Utilidad</span></label>
                    <input type="number" name="utilityContingencyPercentage" value={header.utilityContingencyPercentage} onChange={handleInputChange} className="input input-bordered" step="0.01" />
                </div>
            </div>

            {/* Espacio reservado para las listas de detalles (Materiales, Equipos, Cargos) */}
            <div className="divider">Detalles del Presupuesto</div>

            <div className="flex justify-end gap-2 mt-8">
                <button type="button" onClick={() => navigate('/')} className="btn btn-ghost">Cancelar</button>
                <button type="button" className="btn btn-primary">Generar APU</button>
            </div>
        </div>
    );
}