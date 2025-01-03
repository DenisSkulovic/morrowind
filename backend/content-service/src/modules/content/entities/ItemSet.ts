import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { ItemSetDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { GenerationInstruction, deserializeGenerationInstructions, serializeGenerationInstructions } from "../../../class/GenerationInstruction";
import { Serializable } from "../../../decorator/serializable.decorator";

@Entity()
export class ItemSet extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "ITEM_SET"

    @Column({ type: "jsonb" })
    @Serializable({ serialize: serializeGenerationInstructions, deserialize: deserializeGenerationInstructions })
    set!: GenerationInstruction[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): ItemSetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ItemSetDTO): ItemSet {
        return Serializer.fromDTO(dto, new ItemSet());
    }

}
