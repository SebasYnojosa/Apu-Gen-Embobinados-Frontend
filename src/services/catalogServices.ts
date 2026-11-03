import api from './api';
import type { Company, Material, Equipment, Labor } from '../types';

export const catalogService = {
    getCompanies: async (): Promise<Company[]> => {
        const response = await api.get<Company[]>('/catalog/empresas');
        return response.data;
    },

    getMaterials: async (): Promise<Material[]> => {
        const response = await api.get<Material[]>('/catalog/materiales');
        return response.data;
    },

    getEquipments: async (): Promise<Equipment[]> => {
        const response = await api.get<Equipment[]>('/catalog/equipos');
        return response.data;
    },

    getLabors: async (): Promise<Labor[]> => {
        const response = await api.get<Labor[]>('/catalog/cargos');
        return response.data;
    }
};