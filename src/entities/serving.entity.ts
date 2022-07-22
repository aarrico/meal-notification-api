import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Food } from "./food.entity";

@Entity("serving")
export class Serving {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  size: number;

  @OneToOne(() => Food)
  @JoinColumn()
  food: Food;
}
