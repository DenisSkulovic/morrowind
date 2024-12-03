import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1733237989261 implements MigrationInterface {
    name = 'CreateWorldSchema1733237989261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."past_experience_exp_type_enum" AS ENUM('CHILD', 'ADULT')`);
        await queryRunner.query(`ALTER TABLE "past_experience" ADD "exp_type" "public"."past_experience_exp_type_enum" NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3864f0d6ffb3c51acd98ad817"`);
        await queryRunner.query(`ALTER TABLE "past_experience" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."past_experience_type_enum"`);
        await queryRunner.query(`ALTER TABLE "past_experience" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_a3864f0d6ffb3c51acd98ad817" ON "past_experience" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_a3864f0d6ffb3c51acd98ad817"`);
        await queryRunner.query(`ALTER TABLE "past_experience" DROP COLUMN "type"`);
        await queryRunner.query(`CREATE TYPE "public"."past_experience_type_enum" AS ENUM('CHILD', 'ADULT')`);
        await queryRunner.query(`ALTER TABLE "past_experience" ADD "type" "public"."past_experience_type_enum" NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_a3864f0d6ffb3c51acd98ad817" ON "past_experience" ("type") `);
        await queryRunner.query(`ALTER TABLE "past_experience" DROP COLUMN "exp_type"`);
        await queryRunner.query(`DROP TYPE "public"."past_experience_exp_type_enum"`);
    }

}
