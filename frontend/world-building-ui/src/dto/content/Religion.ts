import { ContentBase } from "../../class/ContentBase";
import { serializeReligionRituals, deserializeReligionRituals, ReligionRitual } from "../../class/ReligionRitual";
import { serializeReligionTenets, deserializeReligionTenets, ReligionTenet } from "../../class/ReligionTenet";
import { ReligionDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";

export class Religion extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter religion name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter religion description', required: true })
    description!: string;

    @Serializable({
        serialize: serializeReligionRituals,
        deserialize: deserializeReligionRituals
    })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Rituals' })
    rituals?: ReligionRitual[];

    @Serializable({
        serialize: serializeReligionTenets,
        deserialize: deserializeReligionTenets
    })
    @FormField({ component: FieldComponentEnum.NESTED_FORM, label: 'Tenets' })
    tenets?: ReligionTenet[];

    public toDTO(): ReligionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ReligionDTO): Religion {
        const religion = new Religion();
        return Serializer.fromDTO(dto, religion);
    }
}
