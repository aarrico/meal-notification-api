import { BaseFood } from './food';

export interface Serving {
    id: string;
    size: number;
    food: BaseFood;
}