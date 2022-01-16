import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

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

  @Column({nullable: true, default: 'null'})
    userId!: string | null;

  @Column()
    boardId!: string;

  @Column({nullable: true, default: null})
    columnId!: string | null;

  /**
 * This method overwrites the userId for the class instance
 * @param newUserID id of the user to whom the instance of the class should be assigned. Default null
 */
  public setUser(newUserID = null): void {
    this.userId = newUserID;
  }
}
