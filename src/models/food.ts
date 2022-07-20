export interface BaseFood {
    name: string;
    protein: number;
    carb: number;
    fat: number;
};

export interface Food extends BaseFood {
    id: string;
};