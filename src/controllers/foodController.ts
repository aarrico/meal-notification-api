import { Request, Response } from "express";
import { Food } from "../entities/food.entity";
import { db } from "../db/db";
import { Repository } from "typeorm";

class FoodController {
  private foodRepo: Repository<Food>;

  constructor() {
    this.foodRepo = db.getRepository(Food);
  }

  public findAll = async (req: Request, res: Response) => {
    try {
      const foods = await this.foodRepo.find();
      return res.send(foods);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  public findById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const food = await this.foodRepo.findOneByOrFail({ id: id });
      return res.send(food);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  public findByName = async (req: Request, res: Response) => {
    const name = req.params.name;

    try {
      const food = await this.foodRepo.findOneByOrFail({ name: name });
      return res.send(food);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  public create = async (req: Request, res: Response) => {
    const { name, protein, carb, fat } = req.body;
    const food = new Food();
    food.name = name;
    food.protein = protein;
    food.carb = carb;
    food.fat = fat;

    try {
      await this.foodRepo.save(food);
    } catch (err) {
      res.status(400).send('Food already exists!');
      return;
    }

    return res.status(201).send(`Food ${name} created`);
  }

  public delete = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try {
      await this.foodRepo.findOneByOrFail({ id: id });
    } catch (err) {
      res.status(404).send('Food not found!');
      return;
    }

    res.status(204).send();
  }
}