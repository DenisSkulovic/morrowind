import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1732653058367 implements MigrationInterface {
    name = 'CreateWorldSchema1732653058367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "weight" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "weight" integer NOT NULL DEFAULT '0'`);
    }

}
