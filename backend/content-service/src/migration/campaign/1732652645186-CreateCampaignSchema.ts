import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCampaignSchema1732652645186 implements MigrationInterface {
    name = 'CreateCampaignSchema1732652645186'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_44adcbb9609ba4c944815d6b069"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "trainedSkillId"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "trained_skill" character varying`);
        await queryRunner.query(`ALTER TABLE "item" ADD "storageSlotDefinition" jsonb`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "storageSlotDefinition"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "trained_skill"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "trainedSkillId" character varying`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_44adcbb9609ba4c944815d6b069" FOREIGN KEY ("trainedSkillId") REFERENCES "skill"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
