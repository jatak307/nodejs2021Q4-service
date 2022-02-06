import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "../../tasks/entity/task.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id!: string;

  @Column()
    name!: string;

  @Column()
    login!: string;

  @Column()
    password!: string;

  @OneToMany(() => Task, (task) => task.user)
    tasks!: string;
}