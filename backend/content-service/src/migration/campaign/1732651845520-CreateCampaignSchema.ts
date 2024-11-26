import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCampaignSchema1732651845520 implements MigrationInterface {
    name = 'CreateCampaignSchema1732651845520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "actions" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "actions" SET NOT NULL`);
    }

}
