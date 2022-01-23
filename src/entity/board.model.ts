import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
// import { Columns } from "./column.model";
import { Columns } from "../resources/boards/board.models";
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

  @OneToMany(() => Task, (task) => task.board)
    tasks!: Task[];

  // @OneToMany(() => Columns, columns => columns.board, { eager: true })
  //   columns!: Columns[] | null;

  @Column({type: 'json'})
    columns: Columns[] = []
}
