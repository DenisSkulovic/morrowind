import { randomUUID } from "crypto";
import { BaseEntity, BeforeInsert, Column, JoinColumn, ManyToOne, PrimaryColumn, CreateDateColumn } from "typeorm";
import { Entity } from "typeorm";
import { Serializable } from "../../../decorator/serializable.decorator";
import { User } from "../../user/entities/User";
import { Campaign } from "../../campaign/entities/Campaign";
import { World } from "../../world/entities/World";
import { ActivityDTO, ActivityEventNameEnumDTO } from "../../../proto/activity";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { deserializeEnum, serializeEnum } from "../../../common/enum/util";
import { ActivityEventNameEnum } from "../../../enum/ActivityEventNameEnum";


@Entity()
export class ActivityRecord extends BaseEntity {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    @BeforeInsert()
    generateId() {
        this.id = `${this.idPrefix}_${randomUUID().replace(/-/g, "")}`;
    }
    idPrefix = "ACTIVITY_RECORD";

    @Column({ type: "varchar", length: 255 })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: ActivityEventNameEnum, protoEnum: ActivityEventNameEnumDTO })
    eventName!: ActivityEventNameEnum;

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    label?: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    @Serializable()
    relatedTargetEntity?: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    @Serializable()
    relatedTargetId?: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    @Serializable()
    relatedEntityName?: string;

    @CreateDateColumn()
    @Serializable({ strategy: SerializeStrategyEnum.DATE })
    createdAt?: Date;

    @ManyToOne(() => World, (world) => world.activityRecords)
    @JoinColumn({ name: "worldId" })
    world!: World;

    @ManyToOne(() => User, (user) => user.activityRecords)
    @JoinColumn({ name: "userId" })
    user!: User;

    @ManyToOne(() => Campaign, (campaign) => campaign.activityRecords)
    @JoinColumn({ name: "campaignId" })
    campaign!: Campaign;

    static build(body: Partial<ActivityRecord>) {
        const activityRecord = new ActivityRecord()
        Object.assign(activityRecord, body)
        return activityRecord
    }

    toDTO(): ActivityDTO {
        return Serializer.toDTO(this)
    }

    static fromDTO(dto: ActivityDTO): ActivityRecord {
        return Serializer.fromDTO(dto, new ActivityRecord())
    }

}