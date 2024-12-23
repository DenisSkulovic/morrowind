import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1734983355470 implements MigrationInterface {
    name = 'CreateWorldSchema1734983355470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity_record" ADD "relatedEntityName" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "activity_record" DROP COLUMN "relatedEntityName"`);
    }

}
