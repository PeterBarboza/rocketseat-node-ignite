import { Entity, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
export class Category {
  @Column({ type: "uuid", primary: true })
  id?: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
