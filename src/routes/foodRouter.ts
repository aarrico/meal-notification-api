import express, { Request, Response } from "express";
import {
  findAll,
  findById,
  create,
  remove,
} from "../controllers/foodController";
import { Food } from "../entities/food.entity";

const foodRouter = express.Router();

foodRouter.get("/", async (req: Request, res: Response) => {
  try {
    const sortField = req.params.sortField || "name";
    const sortDirection = req.params.sortDirection.toUpperCase() || "DESC";

    if (sortDirection === "ASC" || sortDirection === "DESC") {
      const foods: Food[] = await findAll(sortField, sortDirection);
      if (foods) {
        return res.send(foods);
      }
    } else {
      throw "Sort direction must be ASC or DESC.";
    }

    res.status(404).send("food not found");
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

foodRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const food: Food = await findById(id);

    if (food) {
      return res.status(200).send(food);
    }

    res.status(404).send("food not found");
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

foodRouter.post("/", async (req: Request, res: Response) => {
  try {
    const id = await create(req.body);

    res.status(201).json({ id: id });
  } catch (err: any) {
    res.status(400).send("Food already exists!");
  }
});

foodRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await remove(id);

    res.status(204);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

export default foodRouter;