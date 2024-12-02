import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCampaignSchema1733088002322 implements MigrationInterface {
    name = 'CreateCampaignSchema1733088002322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "character_past_experiences_child_past_experience" ("characterId" character varying NOT NULL, "pastExperienceId" character varying NOT NULL, CONSTRAINT "PK_746b871c77acf1beaa3799d3daa" PRIMARY KEY ("characterId", "pastExperienceId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_00e7c61f5f2d3dac9f274e9103" ON "character_past_experiences_child_past_experience" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5c498e3afca781138a4e064488" ON "character_past_experiences_child_past_experience" ("pastExperienceId") `);
        await queryRunner.query(`CREATE TABLE "character_past_experiences_adult_past_experience" ("characterId" character varying NOT NULL, "pastExperienceId" character varying NOT NULL, CONSTRAINT "PK_82c43e899caf1a42e40fc2401bb" PRIMARY KEY ("characterId", "pastExperienceId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3cdccc9546243678fcf49cb264" ON "character_past_experiences_adult_past_experience" ("characterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_11a5e48e41be47210a18067c8b" ON "character_past_experiences_adult_past_experience" ("pastExperienceId") `);
        await queryRunner.query(`ALTER TABLE "character" ADD "birthEra" character varying`);
        await queryRunner.query(`ALTER TABLE "background" ADD "gender" jsonb`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" DROP COLUMN "gender"`);
        await queryRunner.query(`CREATE TYPE "public"."character_gen_instruction_gender_enum" AS ENUM('MALE', 'FEMALE')`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ADD "gender" "public"."character_gen_instruction_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "character_past_experiences_child_past_experience" ADD CONSTRAINT "FK_00e7c61f5f2d3dac9f274e91038" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_past_experiences_child_past_experience" ADD CONSTRAINT "FK_5c498e3afca781138a4e0644885" FOREIGN KEY ("pastExperienceId") REFERENCES "past_experience"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_past_experiences_adult_past_experience" ADD CONSTRAINT "FK_3cdccc9546243678fcf49cb264f" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_past_experiences_adult_past_experience" ADD CONSTRAINT "FK_11a5e48e41be47210a18067c8be" FOREIGN KEY ("pastExperienceId") REFERENCES "past_experience"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character_past_experiences_adult_past_experience" DROP CONSTRAINT "FK_11a5e48e41be47210a18067c8be"`);
        await queryRunner.query(`ALTER TABLE "character_past_experiences_adult_past_experience" DROP CONSTRAINT "FK_3cdccc9546243678fcf49cb264f"`);
        await queryRunner.query(`ALTER TABLE "character_past_experiences_child_past_experience" DROP CONSTRAINT "FK_5c498e3afca781138a4e0644885"`);
        await queryRunner.query(`ALTER TABLE "character_past_experiences_child_past_experience" DROP CONSTRAINT "FK_00e7c61f5f2d3dac9f274e91038"`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."character_gen_instruction_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ADD "gender" character varying`);
        await queryRunner.query(`ALTER TABLE "background" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "character" DROP COLUMN "birthEra"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_11a5e48e41be47210a18067c8b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3cdccc9546243678fcf49cb264"`);
        await queryRunner.query(`DROP TABLE "character_past_experiences_adult_past_experience"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5c498e3afca781138a4e064488"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_00e7c61f5f2d3dac9f274e9103"`);
        await queryRunner.query(`DROP TABLE "character_past_experiences_child_past_experience"`);
    }

}
