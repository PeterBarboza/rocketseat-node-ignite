import { Entity, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("specifications")
export class Specification {
  @Column({ type: "uuid", primary: true })
  id?: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
