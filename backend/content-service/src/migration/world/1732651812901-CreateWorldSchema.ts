import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1732651812901 implements MigrationInterface {
    name = 'CreateWorldSchema1732651812901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "actions" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "actions" SET NOT NULL`);
    }

}
