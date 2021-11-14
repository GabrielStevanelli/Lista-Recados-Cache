"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recados1636329346563 = void 0;
const typeorm_1 = require("typeorm");
class recados1636329346563 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("messages");
    }
}
exports.recados1636329346563 = recados1636329346563;
