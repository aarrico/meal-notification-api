import express, { Request, Response } from "express";
import { BaseFood, Food } from "../models/food";
import { create, findAll, find, remove } from "../controllers/foodController";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const foods: Food[] = await findAll();

    if (foods) {
      return res.status(200).send(foods);
    }

    res.status(404).send('food not found');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const food: Food = await find(id);

    if (food) {
      return res.status(200).send(food);
    }

    res.status(404).send('food not found');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newFood: BaseFood = req.body;
    const id = await create(newFood);

    res.status(201).json({id: id});
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await remove(id);

    res.status(204);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
