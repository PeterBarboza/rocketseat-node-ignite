import { Entity, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
  @Column({ type: "uuid", primary: true })
  id?: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  driver_license: string;

  @Column({ type: "boolean", default: false })
  idAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
