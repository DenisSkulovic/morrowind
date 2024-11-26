import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCampaignSchema1732653092184 implements MigrationInterface {
    name = 'CreateCampaignSchema1732653092184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "weight" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "weight" integer NOT NULL DEFAULT '0'`);
    }

}
