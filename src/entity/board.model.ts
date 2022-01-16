import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Columns } from "./column.model";
import { Task } from "./task.model";

/**
 * This class sets the state for the board object
 */
@Entity({ name: 'boards' })
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id!: string;

  @Column()
    title!: string;

  @OneToMany(() => Task, task => task.boardId)
    task!: Task[] | null;

  @OneToMany(() => Columns, columns => columns.board)
    columns!: Columns[] | null;
}
