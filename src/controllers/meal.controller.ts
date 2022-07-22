import { Meal } from "../entities/meal.entity";
import { db } from "../db/db";
import { Repository } from "typeorm";

const mealRepo: Repository<Meal> = db.getRepository(Meal);
