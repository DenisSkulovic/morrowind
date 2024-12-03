import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1733238178311 implements MigrationInterface {
    name = 'CreateWorldSchema1733238178311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_cc5d7c565d277373c99eb2d455"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3b17af0a5ee216a7e3139d8cef"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3864f0d6ffb3c51acd98ad817"`);
        await queryRunner.query(`ALTER TABLE "trait" RENAME COLUMN "type" TO "trait_type"`);
        await queryRunner.query(`ALTER TYPE "public"."trait_type_enum" RENAME TO "trait_trait_type_enum"`);
        await queryRunner.query(`ALTER TABLE "past_experience" DROP COLUMN "type"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "past_experience" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TYPE "public"."trait_trait_type_enum" RENAME TO "trait_type_enum"`);
        await queryRunner.query(`ALTER TABLE "trait" RENAME COLUMN "trait_type" TO "type"`);
        await queryRunner.query(`CREATE INDEX "IDX_a3864f0d6ffb3c51acd98ad817" ON "past_experience" ("type") `);
        await queryRunner.query(`CREATE INDEX "IDX_3b17af0a5ee216a7e3139d8cef" ON "trait" ("type") `);
        await queryRunner.query(`CREATE INDEX "IDX_cc5d7c565d277373c99eb2d455" ON "memory" ("type") `);
    }

}
