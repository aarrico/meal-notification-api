import { Food } from '../models/food';
import db from '../db/db';
import { Pool } from 'pg';

export class FoodRepo {
    db: Pool;

    constructor(db: Pool) {
        this.db = db;
    }
}

async function create(food: Food): Promise<string> {
    const query = {
        text: 'INSERT INTO food(name, protein, carb, fat) VALUES($1, $2, $3, $4)',
        values: [food.name, food.protein, food.carb, food.fat]
    }

    let res;
    try {
        res = await db.query(query);
    } catch (err) {
        throw err;
    }
    
    return res.rows[0].id;
}

