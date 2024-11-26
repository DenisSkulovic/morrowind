import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1732651298669 implements MigrationInterface {
    name = 'CreateWorldSchema1732651298669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "effect" ALTER COLUMN "element" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "effect" ALTER COLUMN "element" SET NOT NULL`);
    }

}
