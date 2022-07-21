import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Serving } from './serving.entity';

@Entity('meal')
export class Meal {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    order: number;

    @JoinColumn()
    @ManyToMany(() => Serving)
    servings: Serving[];
}