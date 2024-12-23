import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorldSchema1734975871612 implements MigrationInterface {
    name = 'CreateWorldSchema1734975871612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "activity_record" ("id" character varying NOT NULL, "eventName" character varying(255) NOT NULL, "label" character varying(255) NOT NULL, "relatedTargetEntity" character varying(255) NOT NULL, "relatedTargetId" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "worldId" character varying, "userId" character varying, "campaignId" character varying, CONSTRAINT "PK_a7314c500ea63e9981c91dc03a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "character_profession_memory_pools_memory_pool" ("characterProfessionId" character varying NOT NULL, "memoryPoolId" character varying NOT NULL, CONSTRAINT "PK_33f7d2fe2bd6a9d12db00a5abb8" PRIMARY KEY ("characterProfessionId", "memoryPoolId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c663023d36c63c9940a21d8e2d" ON "character_profession_memory_pools_memory_pool" ("characterProfessionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a6ec9345cfc82ffbd567c5ee8a" ON "character_profession_memory_pools_memory_pool" ("memoryPoolId") `);
        await queryRunner.query(`ALTER TABLE "activity_record" ADD CONSTRAINT "FK_f3a947145cd73990b46f36bd661" FOREIGN KEY ("worldId") REFERENCES "world"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "activity_record" ADD CONSTRAINT "FK_0f8f194a669e3c8b05dc8f9554b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "activity_record" ADD CONSTRAINT "FK_7154b9208949faaf59c9559e3e3" FOREIGN KEY ("campaignId") REFERENCES "campaign"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "character_profession_memory_pools_memory_pool" ADD CONSTRAINT "FK_c663023d36c63c9940a21d8e2dc" FOREIGN KEY ("characterProfessionId") REFERENCES "character_profession"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "character_profession_memory_pools_memory_pool" ADD CONSTRAINT "FK_a6ec9345cfc82ffbd567c5ee8a6" FOREIGN KEY ("memoryPoolId") REFERENCES "memory_pool"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character_profession_memory_pools_memory_pool" DROP CONSTRAINT "FK_a6ec9345cfc82ffbd567c5ee8a6"`);
        await queryRunner.query(`ALTER TABLE "character_profession_memory_pools_memory_pool" DROP CONSTRAINT "FK_c663023d36c63c9940a21d8e2dc"`);
        await queryRunner.query(`ALTER TABLE "activity_record" DROP CONSTRAINT "FK_7154b9208949faaf59c9559e3e3"`);
        await queryRunner.query(`ALTER TABLE "activity_record" DROP CONSTRAINT "FK_0f8f194a669e3c8b05dc8f9554b"`);
        await queryRunner.query(`ALTER TABLE "activity_record" DROP CONSTRAINT "FK_f3a947145cd73990b46f36bd661"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6ec9345cfc82ffbd567c5ee8a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c663023d36c63c9940a21d8e2d"`);
        await queryRunner.query(`DROP TABLE "character_profession_memory_pools_memory_pool"`);
        await queryRunner.query(`DROP TABLE "activity_record"`);
    }

}
