import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1734983785175 implements MigrationInterface {
    name = 'CreateWorldSchema1734983785175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity_record" ALTER COLUMN "relatedTargetEntity" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "activity_record" ALTER COLUMN "relatedTargetId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "activity_record" ALTER COLUMN "relatedEntityName" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity_record" ALTER COLUMN "relatedEntityName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "activity_record" ALTER COLUMN "relatedTargetId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "activity_record" ALTER COLUMN "relatedTargetEntity" SET NOT NULL`);
    }

}
