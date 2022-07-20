import { Serving } from './serving';

export interface Meal {
    id: string;
    order: number;
    foods: Serving[];
}