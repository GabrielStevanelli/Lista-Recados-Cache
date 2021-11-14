import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({ name: "messages" })
export class MessageEntity extends BaseEntity {
  @PrimaryColumn()
  uid?: string;

  @Column()
  title!: string;

  @Column()
  message!: string;

  @Column({ name: "created_at" })
  createdAt?: Date;

  @Column({ name: "updated_at" })
  updatedAt?: Date;

  @BeforeInsert()
  private beforeInsert() {
    this.uid = uuid();
    this.createdAt = new Date(Date.now());
    this.updatedAt = new Date(Date.now());
  }

  @BeforeUpdate()
  private beforeUpdate() {
    this.updatedAt = new Date(Date.now());
  }
}
