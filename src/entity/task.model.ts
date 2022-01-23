import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Board } from "./board.model";
import { User } from "./user.model";

/**
 * This class sets the state and behavior for the task object
 */
@Entity({ name: 'tasks' })
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
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

  /**
 * This method overwrites the userId for the class instance
 * @param newUserID id of the user to whom the instance of the class should be assigned. Default null
 */
  public setUser(newUserID = null): void {
    this.userId = newUserID;
  }
}