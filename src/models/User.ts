import {
  Entity, Column, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  telefone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  idade: number;

  @Column()
  peso: number;

  @Column()
  etnia: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default User;
