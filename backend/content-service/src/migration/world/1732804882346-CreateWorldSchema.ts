import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1732804882346 implements MigrationInterface {
    name = 'CreateWorldSchema1732804882346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character_profession" DROP CONSTRAINT "FK_9e8f0d8bffedf25c2692f0aa9df"`);
        await queryRunner.query(`CREATE TABLE "character_profession_characters_character" ("characterProfessionId" character varying NOT NULL, "characterId" character varying NOT NULL, CONSTRAINT "PK_6d653c47c3d9ccff9a1d766b7db" PRIMARY KEY ("characterProfessionId", "characterId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8a5ceae9e532cbb0ce61f17007" ON "character_profession_characters_character" ("characterProfessionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a7ce4bf82a5166b7ba3d167aca" ON "character_profession_characters_character" ("characterId") `);
        await queryRunner.query(`ALTER TABLE "character_profession" DROP COLUMN "characterId"`);
        await queryRunner.query(`ALTER TABLE "birthsign" ADD "name" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "name" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "description" character varying(255) NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."skill_category_enum" AS ENUM('CRAFTING', 'MAGIC', 'COMBAT', 'STEALTH', 'SOCIAL')`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "category" "public"."skill_category_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "character_profession" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "character_profession" ADD "name" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TYPE "public"."effect_target_enum" RENAME TO "effect_target_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."effect_target_enum" AS ENUM('HEALTH', 'STAMINA', 'MANA')`);
        await queryRunner.query(`ALTER TABLE "effect" ALTER COLUMN "target" TYPE "public"."effect_target_enum" USING "target"::"text"::"public"."effect_target_enum"`);
        await queryRunner.query(`DROP TYPE "public"."effect_target_enum_old"`);
        await queryRunner.query(`ALTER TABLE "character_profession_characters_character" ADD CONSTRAINT "FK_8a5ceae9e532cbb0ce61f170073" FOREIGN KEY ("characterProfessionId") REFERENCES "character_profession"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_profession_characters_character" ADD CONSTRAINT "FK_a7ce4bf82a5166b7ba3d167acae" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character_profession_characters_character" DROP CONSTRAINT "FK_a7ce4bf82a5166b7ba3d167acae"`);
        await queryRunner.query(`ALTER TABLE "character_profession_characters_character" DROP CONSTRAINT "FK_8a5ceae9e532cbb0ce61f170073"`);
        await queryRunner.query(`CREATE TYPE "public"."effect_target_enum_old" AS ENUM('HEALTH', 'STAMINA', 'MAGIC')`);
        await queryRunner.query(`ALTER TABLE "effect" ALTER COLUMN "target" TYPE "public"."effect_target_enum_old" USING "target"::"text"::"public"."effect_target_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."effect_target_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."effect_target_enum_old" RENAME TO "effect_target_enum"`);
        await queryRunner.query(`ALTER TABLE "character_profession" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "character_profession" ADD "name" character varying(255) NOT NULL DEFAULT 'PLACEHOLDER'`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "category"`);
        await queryRunner.query(`DROP TYPE "public"."skill_category_enum"`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "birthsign" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "character_profession" ADD "characterId" character varying`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a7ce4bf82a5166b7ba3d167aca"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8a5ceae9e532cbb0ce61f17007"`);
        await queryRunner.query(`DROP TABLE "character_profession_characters_character"`);
        await queryRunner.query(`ALTER TABLE "character_profession" ADD CONSTRAINT "FK_9e8f0d8bffedf25c2692f0aa9df" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
