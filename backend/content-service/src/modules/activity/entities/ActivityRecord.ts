import { randomUUID } from "crypto";
import { BaseEntity, BeforeInsert, Column, JoinColumn, ManyToOne, PrimaryColumn, CreateDateColumn } from "typeorm";
import { Entity } from "typeorm";
import { Serializable } from "../../../decorator/serializable.decorator";
import { User } from "../../user/entities/User";
import { Campaign } from "../../campaign/entities/Campaign";
import { World } from "../../world/entities/World";
import { ActivityDTO } from "../../../proto/activity";


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
    @Serializable()
    eventName!: string;

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    label?: string;

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    relatedTargetEntity?: string;

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    relatedTargetId?: string;

    @CreateDateColumn()
    @Serializable()
    createdAt!: Date;

    @ManyToOne(() => World, (world) => world.activityRecords)
    @JoinColumn({ name: "worldId" })
    world!: World;

    @ManyToOne(() => User, (user) => user.activityRecords)
    @JoinColumn({ name: "userId" })
    user!: User;

    @ManyToOne(() => Campaign, (campaign) => campaign.activityRecords)
    @JoinColumn({ name: "campaignId" })
    campaign!: Campaign;

    static build(body: any) {
        const activityRecord = new ActivityRecord()
        activityRecord.eventName = body.eventName
        activityRecord.label = body.label
        activityRecord.relatedTargetEntity = body.relatedTargetEntity
        activityRecord.relatedTargetId = body.relatedTargetId
        activityRecord.createdAt = body.createdAt
        activityRecord.world = body.world
        activityRecord.user = body.user
        activityRecord.campaign = body.campaign
        return activityRecord
    }

    toDTO(): ActivityDTO {
        return {
            id: this.id,
            eventName: this.eventName,
            relatedTargetEntity: this.relatedTargetEntity || "",
            relatedTargetId: this.relatedTargetId || "",
            createdAt: this.createdAt.toISOString(),
            userId: this.user.id,
            worldId: this.world.id,
            campaignId: this.campaign.id,
        }
    }

    static fromDTO(dto: ActivityDTO): ActivityRecord {
        const activityRecord = new ActivityRecord()
        activityRecord.id = dto.id
        activityRecord.eventName = dto.eventName
        activityRecord.relatedTargetEntity = dto.relatedTargetEntity
        activityRecord.relatedTargetId = dto.relatedTargetId
        activityRecord.createdAt = new Date(dto.createdAt)
        activityRecord.world = { id: dto.worldId } as World
        activityRecord.user = { id: dto.userId } as User
        activityRecord.campaign = { id: dto.campaignId } as Campaign
        return activityRecord
    }

}