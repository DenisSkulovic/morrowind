import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1733254318692 implements MigrationInterface {
    name = 'CreateWorldSchema1733254318692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "background" ADD "itemSets" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "background" DROP COLUMN "itemSets"`);
    }

}
