import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
