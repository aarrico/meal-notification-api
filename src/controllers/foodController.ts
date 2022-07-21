import { Food } from "../entities/food.entity";
import { db } from "../db/db";
import { Repository } from "typeorm";

const foodRepo: Repository<Food> = db.getRepository(Food);

export const findAll = async (sortField: string, sortDirection: 'ASC' | 'DESC'): Promise<Food[]> => {
  try {
    return await foodRepo.createQueryBuilder('food').select('*').orderBy(`food.${sortField}`, sortDirection).getMany();
  } catch (err) {
    throw err;
  }
}

export const findById = async (id: string): Promise<Food> => {
  try {
    const food = await foodRepo.findOneOrFail({ 
      where: {
        id: id
      }
     });
    return food;
  } catch (err) {
    throw err;
  }
}

export const create = async (data: any): Promise<string | undefined> => {
  try {
    const { name, protein, carb, fat } = data;
    const food = new Food();
    food.name = name;
    food.protein = protein;
    food.carb = carb;
    food.fat = fat;

    const result = await foodRepo.save(food);
    return result.id;
  } catch (err) {
    throw err;
  }
}

export const remove = async (id: string) => {  
  try {
    await foodRepo.delete(id);
  } catch (err) {
    throw err;
  }
}