import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1733000401178 implements MigrationInterface {
    name = 'CreateWorldSchema1733000401178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" DROP CONSTRAINT "FK_c5059610267d87105696173dace"`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" DROP CONSTRAINT "FK_49ebb0c49defe82560701a3be06"`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ALTER COLUMN "worldId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ADD CONSTRAINT "FK_c5059610267d87105696173dace" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ADD CONSTRAINT "FK_49ebb0c49defe82560701a3be06" FOREIGN KEY ("worldId") REFERENCES "world"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" DROP CONSTRAINT "FK_49ebb0c49defe82560701a3be06"`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" DROP CONSTRAINT "FK_c5059610267d87105696173dace"`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ALTER COLUMN "worldId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ADD CONSTRAINT "FK_49ebb0c49defe82560701a3be06" FOREIGN KEY ("worldId") REFERENCES "world"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "character_gen_instruction" ADD CONSTRAINT "FK_c5059610267d87105696173dace" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
