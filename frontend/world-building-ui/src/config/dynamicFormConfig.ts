import { FieldComponentEnum } from "../enum/FieldComponentEnum";
import { LooseObject } from "../types";

export const fieldsThatNeedFetch = [
    FieldComponentEnum.OBJECT_FIELD,
    FieldComponentEnum.SELECT_FIELD,
    FieldComponentEnum.MULTI_SELECT_FIELD
];

export type DefaultValue = string | number | boolean | LooseObject | LooseObject[];

const defaultValueMap: Record<FieldComponentEnum, DefaultValue> = {
    [FieldComponentEnum.NUMBER_FIELD]: 0,
    [FieldComponentEnum.CHECKBOX_FIELD]: false,
    [FieldComponentEnum.MULTI_SELECT_FIELD]: [],
    [FieldComponentEnum.ITEM_LIST_FIELD]: [],
    [FieldComponentEnum.NESTED_FORM]: [],
    [FieldComponentEnum.TEXT_FIELD]: '',
    [FieldComponentEnum.TEXTAREA_FIELD]: '',
    [FieldComponentEnum.SELECT_FIELD]: '',
    [FieldComponentEnum.OBJECT_FIELD]: '',
    [FieldComponentEnum.RADIO_FIELD]: '',
    [FieldComponentEnum.GENERATION_INSTRUCTION_FIELD]: '',
    [FieldComponentEnum.DATE_FIELD]: new Date()
};

export const getDefaultValue = (component: FieldComponentEnum): DefaultValue => {
    return defaultValueMap[component];
};
