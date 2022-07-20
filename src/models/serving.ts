import { Food } from './food';

export interface Serving {
    id: string;
    size: number;
    food: Food;
}