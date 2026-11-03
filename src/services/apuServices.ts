import api from './api';
import type { Process, ApuResponseDTO } from '../types';

export const apuService = {
    // Obtener todos los APUs o filtrar por empresa
    getAllApus: async (companyId?: string): Promise<Process[]> => {
        const params = companyId ? { companyId } : {};
        const response = await api.get<Process[]>('/apus', { params });
        return response.data;
    },

    // Buscador avanzado con múltiples parámetros dinámicos
    searchApus: async (filters: Record<string, string | number | boolean>): Promise<Process[]> => {
        const response = await api.get<Process[]>('/apus/buscar', { params: filters });
        return response.data;
    },

    // Obtener un APU específico con todas sus listas de detalles
    getApuById: async (serviceRequest: string): Promise<ApuResponseDTO> => {
        const response = await api.get<ApuResponseDTO>(`/apus/${serviceRequest}`);
        return response.data;
    },

    // Eliminar un APU en cascada
    deleteApu: async (serviceRequest: string): Promise<void> => {
        await api.delete(`/apus/${serviceRequest}`);
    }
};