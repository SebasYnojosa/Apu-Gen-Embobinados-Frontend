// ==========================================
// CATÁLOGOS MAESTROS
// ==========================================
export interface Company {
    id: number;
    name: string;
}

export interface Material {
    id: number;
    description: string;
    unit: string;
    baseCost: number;
}

export interface Equipment {
    id: number;
    description: string;
    baseValue: number;
    depreciationFactor: number;
}

export interface Labor {
    id: number;
    description: string;
    baseDailyWage: number;
}

// ==========================================
// DETALLES DEL PROCESO (SNAPSHOTS)
// ==========================================
export interface ProcessMaterial {
    id: number;
    material: Material;
    descriptionSnapshot: string;
    unitSnapshot: string;
    costApplied: number;
    quantity: number;
    amount: number;
}

export interface ProcessEquipment {
    id: number;
    equipment: Equipment;
    descriptionSnapshot: string;
    valueApplied: number;
    depreciationFactorApplied: number;
    quantity: number;
    dailyUseCost: number;
}

export interface ProcessLabor {
    id: number;
    labor: Labor;
    descriptionSnapshot: string;
    dailyWageApplied: number;
    dotation: number;
    dailyCost: number;
}

// ==========================================
// CABECERA DEL APU (PROCESO)
// ==========================================
export interface Process {
    serviceRequest: string;
    company: Company;
    processType: string;
    power?: string;    // Opcional
    serial?: string;   // Opcional
    brand?: string;    // Opcional
    
    // Variables de Cálculo
    itemQuantity: number;
    performance: number;
    socialLawsPercentage: number;
    adminPercentage: number;
    utilityContingencyPercentage: number;
    
    // Totales
    materialUnitCost: number;
    equipmentUnitCost: number;
    laborUnitCost: number;
    directUnitCost: number;
    adminCostValue: number;
    totalUnitCost: number;
    utilityCostValue: number;
    calculatedUnitPrice: number;
    proposedUnitPrice: number;
}

// ==========================================
// DTO DE RESPUESTA COMPLETA (Para el endpoint GET)
// ==========================================
export interface ApuResponseDTO {
    process: Process;
    materials: ProcessMaterial[];
    equipments: ProcessEquipment[];
    labors: ProcessLabor[];
}