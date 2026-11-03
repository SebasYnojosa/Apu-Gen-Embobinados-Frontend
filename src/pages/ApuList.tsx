import { useEffect, useState } from 'react';
import { apuService } from '../services/apuServices';
import type { Process } from '../types/index';

export default function ApuList() {
    const [apus, setApus] = useState<Process[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApus = async () => {
            try {
                const data = await apuService.getAllApus();
                setApus(data);
            } catch (error) {
                console.error("Error cargando APUs", error);
            } finally {
                setLoading(false);
            }
        };
        fetchApus();
    }, []);

    if (loading) return <div className="flex justify-center p-10"><span className="loading loading-spinner loading-lg text-primary"></span></div>;

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Gestión de APUs</h1>
                <button className="btn btn-primary">Nuevo APU</button>
            </div>
            
            <div className="overflow-x-auto bg-base-100 rounded-box shadow">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Solicitud</th>
                            <th>Empresa</th>
                            <th>Proceso</th>
                            <th>Precio Unitario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apus.map((apu) => (
                            <tr key={apu.serviceRequest}>
                                <td className="font-bold">{apu.serviceRequest}</td>
                                <td>{apu.company.name}</td>
                                <td>{apu.processType} {apu.power ? `- ${apu.power}` : ''}</td>
                                <td>${apu.proposedUnitPrice.toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-sm btn-outline btn-info mr-2">Ver</button>
                                    <button className="btn btn-sm btn-outline btn-error">Borrar</button>
                                </td>
                            </tr>
                        ))}
                        {apus.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center py-4 text-gray-500">No hay APUs registrados.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}