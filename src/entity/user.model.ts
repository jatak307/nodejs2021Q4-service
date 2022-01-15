import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

/**
 * This class sets the state for the user object
 */
@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id!: string;

  @Column()
    name!: string;

  @Column()
    login!: string;

  @Column()
    password!: string;
}
