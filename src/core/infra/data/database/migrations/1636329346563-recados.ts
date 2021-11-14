import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class recados1636329346563 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "messages",
        columns: [
          {
            name: "uid",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "title",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "message",
            type: "varchar",
            length: "200",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("messages");
  }
}
