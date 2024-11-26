import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCampaignSchema1732650897713 implements MigrationInterface {
    name = 'CreateCampaignSchema1732650897713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."effect_type_enum" RENAME TO "effect_type_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."effect_type_enum" AS ENUM('DAMAGE', 'HEALING', 'BUFF', 'DEBUFF', 'RESISTANCE', 'STEALING')`);
        await queryRunner.query(`ALTER TABLE "effect" ALTER COLUMN "type" TYPE "public"."effect_type_enum" USING "type"::"text"::"public"."effect_type_enum"`);
        await queryRunner.query(`DROP TYPE "public"."effect_type_enum_old"`);
        await queryRunner.query(`ALTER TYPE "public"."resistance_effecttype_enum" RENAME TO "resistance_effecttype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."resistance_effecttype_enum" AS ENUM('ELEMENTAL', 'STATUS', 'DISEASE', 'MAGIC')`);
        await queryRunner.query(`ALTER TABLE "resistance" ALTER COLUMN "effectType" TYPE "public"."resistance_effecttype_enum" USING "effectType"::"text"::"public"."resistance_effecttype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."resistance_effecttype_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."resistance_effecttype_enum_old" AS ENUM('ELEMENTAL', 'STATUS', 'DISEASE')`);
        await queryRunner.query(`ALTER TABLE "resistance" ALTER COLUMN "effectType" TYPE "public"."resistance_effecttype_enum_old" USING "effectType"::"text"::"public"."resistance_effecttype_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."resistance_effecttype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."resistance_effecttype_enum_old" RENAME TO "resistance_effecttype_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."effect_type_enum_old" AS ENUM('DAMAGE', 'HEALING', 'BUFF', 'DEBUFF', 'RESISTANCE')`);
        await queryRunner.query(`ALTER TABLE "effect" ALTER COLUMN "type" TYPE "public"."effect_type_enum_old" USING "type"::"text"::"public"."effect_type_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."effect_type_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."effect_type_enum_old" RENAME TO "effect_type_enum"`);
    }

}
