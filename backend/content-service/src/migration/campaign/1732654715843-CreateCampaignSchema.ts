import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCampaignSchema1732654715843 implements MigrationInterface {
    name = 'CreateCampaignSchema1732654715843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."tag_subtype_enum" RENAME TO "tag_subtype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."tag_subtype_enum" AS ENUM('MATERIAL', 'CULTURE', 'RELATION', 'FACTION', 'RELIGION', 'WEAPON_QUALITY', 'ARMOR_QUALITY', 'WEAPON_TYPE', 'STATUS', 'QUEST')`);
        await queryRunner.query(`ALTER TABLE "tag" ALTER COLUMN "subtype" TYPE "public"."tag_subtype_enum" USING "subtype"::"text"::"public"."tag_subtype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."tag_subtype_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."tag_subtype_enum_old" AS ENUM('CULTURE', 'RELATION', 'FACTION', 'RELIGION', 'WEAPON_QUALITY', 'ARMOR_QUALITY', 'WEAPON_TYPE', 'STATUS', 'QUEST')`);
        await queryRunner.query(`ALTER TABLE "tag" ALTER COLUMN "subtype" TYPE "public"."tag_subtype_enum_old" USING "subtype"::"text"::"public"."tag_subtype_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."tag_subtype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."tag_subtype_enum_old" RENAME TO "tag_subtype_enum"`);
    }

}