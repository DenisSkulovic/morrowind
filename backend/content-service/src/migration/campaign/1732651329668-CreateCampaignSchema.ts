import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCampaignSchema1732651329668 implements MigrationInterface {
    name = 'CreateCampaignSchema1732651329668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "effect" ALTER COLUMN "element" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "effect" ALTER COLUMN "element" SET NOT NULL`);
    }

}
