import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategory1665944692060 implements MigrationInterface {
    name = 'CreateCategory1665944692060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2022-10-16 18:17:47.649902'`);
    }

}
