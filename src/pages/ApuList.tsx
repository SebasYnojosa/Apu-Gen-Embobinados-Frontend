import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ApuForm() {
    const navigate = useNavigate();

    const [header, setHeader] = useState({
        serviceRequest: '', companyId: '', companyName: '', mainProcess: '', description: '',
        power: '', serial: '', brand: '', location: '',
        itemQuantity: 1, performance: 1, socialLawsPercentage: 0.75,
        adminPercentage: 0.15, utilityContingencyPercentage: 0.10
    });

    const [materials, setMaterials] = useState<any[]>([]);
    const [equipments, setEquipments] = useState<any[]>([]);
    const [labors, setLabors] = useState<any[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setHeader(prev => ({ ...prev, [name]: value }));
    };

    // --- MANEJADORES DE LISTAS ---
    const addMaterial = () => setMaterials([...materials, { materialId: '', description: '', unit: '', price: '', quantity: '' }]);
    const removeMaterial = (index: number) => setMaterials(materials.filter((_, i) => i !== index));
    const updateMaterial = (index: number, field: string, value: string | number) => {
        const newMaterials = [...materials];
        newMaterials[index] = { ...newMaterials[index], [field]: value };
        setMaterials(newMaterials);
    };

    const addEquipment = () => setEquipments([...equipments, { equipmentId: '', description: '', baseValue: '', depreciation: '', quantity: '' }]);
    const removeEquipment = (index: number) => setEquipments(equipments.filter((_, i) => i !== index));
    const updateEquipment = (index: number, field: string, value: string | number) => {
        const newEquipments = [...equipments];
        newEquipments[index] = { ...newEquipments[index], [field]: value };
        setEquipments(newEquipments);
    };

    const addLabor = () => setLabors([...labors, { laborId: '', description: '', dailyWage: '', dotation: '' }]);
    const removeLabor = (index: number) => setLabors(labors.filter((_, i) => i !== index));
    const updateLabor = (index: number, field: string, value: string | number) => {
        const newLabors = [...labors];
        newLabors[index] = { ...newLabors[index], [field]: value };
        setLabors(newLabors);
    };

    return (
        <div className="p-6 bg-base-100 rounded-box shadow max-w-5xl mx-auto border border-base-200">
            <h1 className="text-2xl font-bold mb-6">Crear Nuevo APU</h1>

            {/* --- SECCIÓN 1: DATOS GENERALES --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 border-b pb-8">
                {/* Fila 1 */}
                <div className="form-control md:col-span-1">
                    <label className="label"><span className="label-text font-bold">Solicitud (ID)*</span></label>
                    <input type="text" name="serviceRequest" value={header.serviceRequest} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Ej: SR-2026-001" required />
                </div>

                <div className="form-control md:col-span-3">
                    <label className="label"><span className="label-text font-bold">Proceso Principal*</span></label>
                    <input type="text" name="mainProcess" value={header.mainProcess} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Ej: Rebobinado Motor" required />
                </div>

                {/* Fila 2: Empresa dividida 25% / 75% */}
                <div className="form-control md:col-span-1">
                    <label className="label"><span className="label-text font-bold">Empresa (ID)*</span></label>
                    <input type="text" name="companyId" value={header.companyId} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Ej: EMP-01" required />
                </div>

                <div className="form-control md:col-span-3">
                    <label className="label"><span className="label-text font-bold">Nombre de la Empresa (Búsqueda)</span></label>
                    <input type="text" name="companyName" value={header.companyName} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Escribe para buscar la empresa..." />
                </div>

                {/* Fila 3: Descripción ocupa todo el ancho */}
                <div className="form-control md:col-span-4">
                    <label className="label"><span className="label-text font-bold">Descripción del Servicio*</span></label>
                    <input type="text" name="description" value={header.description} onChange={handleInputChange} className="input input-bordered w-full" required />
                </div>
            </div>

            {/* --- SECCIÓN 2: ESPECIFICACIONES --- */}
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

            {/* --- SECCIÓN 4: LISTAS DE DETALLES --- */}
            <div className="flex flex-col gap-6 mb-8 overflow-x-auto">

                {/* MATERIALES */}
                <div className="bg-base-200/50 border border-base-300 p-6 rounded-xl min-w-[700px]">
                    <h3 className="text-lg text-base-content font-medium mb-4 flex items-center gap-2">
                        <span>🔧</span> Materiales
                    </h3>
                    <div className="grid grid-cols-[100px_minmax(150px,1fr)_80px_100px_100px_32px] gap-3 px-1 mb-2 text-sm font-semibold text-base-content/70">
                        <div>ID</div><div>Descripción</div><div>Unidad</div><div>Precio</div><div>Cantidad</div><div></div>
                    </div>
                    {materials.map((mat, index) => (
                        <div key={`mat-${index}`} className="grid grid-cols-[100px_minmax(150px,1fr)_80px_100px_100px_32px] gap-3 mb-2 items-center">
                            <input type="text" className="input input-sm input-bordered w-full" value={mat.materialId} onChange={(e) => updateMaterial(index, 'materialId', e.target.value)} />
                            <input type="text" className="input input-sm input-bordered w-full bg-base-200 text-base-content/60" value={mat.description} disabled placeholder="Auto" />
                            <input type="text" className="input input-sm input-bordered w-full bg-base-200 text-base-content/60" value={mat.unit} disabled placeholder="Auto" />
                            <input type="number" className="input input-sm input-bordered w-full bg-base-200 text-base-content/60" value={mat.price} disabled placeholder="Auto" />
                            <input type="number" className="input input-sm input-bordered w-full" value={mat.quantity} onChange={(e) => updateMaterial(index, 'quantity', parseFloat(e.target.value))} />
                            <button type="button" className="btn btn-sm btn-square btn-outline btn-error text-lg" onClick={() => removeMaterial(index)}>-</button>
                        </div>
                    ))}
                    <button type="button" onClick={addMaterial} className="btn btn-sm btn-block btn-outline border-dashed text-base-content/60 hover:text-primary mt-2">
                        + Agregar Material
                    </button>
                </div>

                {/* EQUIPOS */}
                <div className="bg-base-200/50 border border-base-300 p-6 rounded-xl min-w-[700px]">
                    <h3 className="text-lg text-base-content font-medium mb-4 flex items-center gap-2">
                        <span>⚙️</span> Equipos
                    </h3>
                    <div className="grid grid-cols-[100px_minmax(150px,1fr)_100px_120px_100px_32px] gap-3 px-1 mb-2 text-sm font-semibold text-base-content/70">
                        <div>ID</div><div>Descripción</div><div>Precio Inicial</div><div>Factor de Deprec.</div><div>Cantidad</div><div></div>
                    </div>
                    {equipments.map((eq, index) => (
                        <div key={`eq-${index}`} className="grid grid-cols-[100px_minmax(150px,1fr)_100px_120px_100px_32px] gap-3 mb-2 items-center">
                            <input type="text" className="input input-sm input-bordered w-full" value={eq.equipmentId} onChange={(e) => updateEquipment(index, 'equipmentId', e.target.value)} />
                            <input type="text" className="input input-sm input-bordered w-full bg-base-200 text-base-content/60" value={eq.description} disabled placeholder="Auto" />
                            <input type="number" className="input input-sm input-bordered w-full bg-base-200 text-base-content/60" value={eq.baseValue} disabled placeholder="Auto" />
                            <input type="number" className="input input-sm input-bordered w-full bg-base-200 text-base-content/60" value={eq.depreciation} disabled placeholder="Auto" />
                            <input type="number" className="input input-sm input-bordered w-full" value={eq.quantity} onChange={(e) => updateEquipment(index, 'quantity', parseFloat(e.target.value))} />
                            <button type="button" className="btn btn-sm btn-square btn-outline btn-error text-lg" onClick={() => removeEquipment(index)}>-</button>
                        </div>
                    ))}
                    <button type="button" onClick={addEquipment} className="btn btn-sm btn-block btn-outline border-dashed text-base-content/60 hover:text-primary mt-2">
                        + Agregar Equipo
                    </button>
                </div>

                {/* MANO DE OBRA */}
                <div className="bg-base-200/50 border border-base-300 p-6 rounded-xl min-w-[700px]">
                    <h3 className="text-lg text-base-content font-medium mb-4 flex items-center gap-2">
                        <span>👷</span> Mano de Obra (Cargos)
                    </h3>
                    <div className="grid grid-cols-[100px_minmax(150px,1fr)_120px_120px_32px] gap-3 px-1 mb-2 text-sm font-semibold text-base-content/70">
                        <div>ID</div><div>Descripción</div><div>Salario diario</div><div>Dotación</div><div></div>
                    </div>
                    {labors.map((lab, index) => (
                        <div key={`lab-${index}`} className="grid grid-cols-[100px_minmax(150px,1fr)_120px_120px_32px] gap-3 mb-2 items-center">
                            <input type="text" className="input input-sm input-bordered w-full" value={lab.laborId} onChange={(e) => updateLabor(index, 'laborId', e.target.value)} />
                            <input type="text" className="input input-sm input-bordered w-full bg-base-200 text-base-content/60" value={lab.description} disabled placeholder="Auto" />
                            <input type="number" className="input input-sm input-bordered w-full bg-base-200 text-base-content/60" value={lab.dailyWage} disabled placeholder="Auto" />
                            <input type="number" className="input input-sm input-bordered w-full" value={lab.dotation} onChange={(e) => updateLabor(index, 'dotation', parseFloat(e.target.value))} />
                            <button type="button" className="btn btn-sm btn-square btn-outline btn-error text-lg" onClick={() => removeLabor(index)}>-</button>
                        </div>
                    ))}
                    <button type="button" onClick={addLabor} className="btn btn-sm btn-block btn-outline border-dashed text-base-content/60 hover:text-primary mt-2">
                        + Agregar Mano de Obra
                    </button>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 border-t pt-6">
                <button type="button" onClick={() => navigate('/')} className="btn btn-ghost">Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={() => console.log({ ...header, materials, equipments, labors })}>Generar APU</button>
            </div>
        </div>
    );
}