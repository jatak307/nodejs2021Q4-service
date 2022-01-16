import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Board } from "./board.model";

@Entity({ name: 'columns' })
export class Columns extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id!: string;

  @Column()
    title!: string;

  @Column()
    order!: number;

  @ManyToOne(() => Board, board => board.columns)
    board!: Board;
}
