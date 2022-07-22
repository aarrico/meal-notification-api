import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("food")
@Unique(["name"])
export class Food {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  protein: number;

  @Column()
  carb: number;

  @Column()
  fat: number;
}
