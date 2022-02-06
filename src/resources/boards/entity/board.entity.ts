import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Columns } from "../dto/board.dto";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id!: string;

  @Column()
    title!: string;

  @Column({  type: 'json'})
    columns: Columns[] = [];

  // @OneToMany(() => Task, (task) => task.board)
  //   tasks!: Task[];
}