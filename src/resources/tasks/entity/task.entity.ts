import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "../../boards/entity/board.entity";
import { User } from "../../users/entity/user.entity";

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id!: string;

  @Column()
    title!: string;

  @Column()
    order!: number;

  @Column()
    description!: string;

  @ManyToOne(() => Board, (board) => board.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'boardId' })
    board!: string;
  
  @Column({ nullable: true })
    boardId!: string;
  
  @Column({ nullable: true })
    columnId!: string;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'SET NULL'})
  @JoinColumn({ name: 'userId' })
    user!: string;

  @Column({ nullable: true })
    userId!: string | null;
}
