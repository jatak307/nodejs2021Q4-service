import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

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
