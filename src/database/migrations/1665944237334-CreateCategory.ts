import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategory1665944237334 implements MigrationInterface {
    name = 'CreateCategory1665944237334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'now()', "description" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
