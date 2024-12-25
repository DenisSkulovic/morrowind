import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1735158957462 implements MigrationInterface {
    name = 'CreateWorldSchema1735158957462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equipment_slot" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "storage_slot" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "item" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "past_experience" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "memory_pool_entry" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "character_profession" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "memory_pool" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "skill" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "trait" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "disease" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "effect" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "faction" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "tag" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "fact" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "memory" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "character_memory" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "birthsign" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "race" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "character" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "addiction" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "background" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "item_set" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "mood" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "need" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "personality_profile" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "religion" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "resistance" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "status" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "world" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "account" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "character_group_gen_instruction" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "skill_set" ADD "createdAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "campaign" ALTER COLUMN "createdAt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "campaign" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "campaign" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "campaign" ALTER COLUMN "createdAt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "skill_set" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "character_group_gen_instruction" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "world" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "status" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "resistance" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "religion" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "personality_profile" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "need" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "mood" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "item_set" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "background" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "addiction" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "character" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "race" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "birthsign" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "character_memory" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "memory" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "fact" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "faction" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "effect" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "disease" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "trait" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "skill" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "memory_pool" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "character_profession" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "memory_pool_entry" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "past_experience" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "storage_slot" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "equipment_slot" DROP COLUMN "createdAt"`);
    }

}
