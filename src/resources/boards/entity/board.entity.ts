import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "../../tasks/entity/task.entity";
import { Columns } from "../dto/board.dto";

@Entity({ name: 'boards' })
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id!: string;

  @Column()
    title!: string;

  @Column({  type: 'json'})
    columns: Columns[] = [];

  @OneToMany(() => Task, (task) => task.board)
    tasks!: Task[];
}