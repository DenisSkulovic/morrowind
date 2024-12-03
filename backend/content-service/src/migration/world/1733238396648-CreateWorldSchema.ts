import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1733238396648 implements MigrationInterface {
    name = 'CreateWorldSchema1733238396648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_d3af1a9284f3701090d49b19d5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1a0c4a75b6e0db5207b0bf7659"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8d2c809598161631282affa5fb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7a26c0a5c431b557b7ba2f2f9b"`);
        await queryRunner.query(`ALTER TABLE "equipment_slot" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "storage_slot" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "skill_set" DROP COLUMN "type"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "skill_set" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "storage_slot" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "equipment_slot" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_7a26c0a5c431b557b7ba2f2f9b" ON "skill_set" ("type") `);
        await queryRunner.query(`CREATE INDEX "IDX_8d2c809598161631282affa5fb" ON "storage_slot" ("type") `);
        await queryRunner.query(`CREATE INDEX "IDX_1a0c4a75b6e0db5207b0bf7659" ON "skill" ("type") `);
        await queryRunner.query(`CREATE INDEX "IDX_d3af1a9284f3701090d49b19d5" ON "equipment_slot" ("type") `);
    }

}
