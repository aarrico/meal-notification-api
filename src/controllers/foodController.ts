import { BaseFood, Food } from "../models/food";
import db from "../db/db";

export const findAll = async (): Promise<Food[]> => {
  const queryStr = `SELECT * FROM food ORDER BY name DESC`;

  try {
    const res = await db.query(queryStr);
    return res.rows;
  } catch (err) {
    throw err;
  }
}

export const find = async (id: number): Promise<Food> => {
  const queryStr = `SELECT * FROM food WHERE id = ${id}`;

  try {
    const res = await db.query(queryStr);
    return res.rows[0];
  } catch (err) {
    throw err;
  }
}

export const create = async (food: BaseFood): Promise<number> => {
  const queryStr = `INSERT INTO food(name, protein, carb, fat) VALUES(${food.name}, ${food.protein}, ${food.carb}, ${food.fat})`;

  let id: number;
  try {
    const res = await db.query(queryStr);
    id = res.rows[0].id;
  } catch (err) {
    throw err;
  }

  return id;
};

export const remove = async (id: number): Promise<void> => {
  const queryStr = `DELETE FROM food WHERE id = ${id}`;

  try {
    await db.query(queryStr);
  } catch (err) {
    throw err;
  }
}