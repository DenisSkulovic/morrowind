import { FC } from "react";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import CheckboxField from "./CheckboxField";
import GenerationInstructionField from "./GenerationInstructionField";
import ItemListField from "./ItemListField";
import MultiSelectField from "./MultiSelectField";
import NumberField from "./NumberField";
import ObjectField from "./ObjectField";
import RadioField from "./RadioField";
import SelectField from "./SelectField";
import Textareafield from "./Textareafield";
import TextField from "./TextField";
import NestedFormField from "./NestedFormField";
import DateField from "./DateField";

const FIELD_COMPONENTS: { [key in FieldComponentEnum]: FC<any> } = {
    [FieldComponentEnum.SELECT_FIELD]: SelectField,
    [FieldComponentEnum.MULTI_SELECT_FIELD]: MultiSelectField,
    [FieldComponentEnum.TEXT_FIELD]: TextField,
    [FieldComponentEnum.NUMBER_FIELD]: NumberField,
    [FieldComponentEnum.CHECKBOX_FIELD]: CheckboxField,
    [FieldComponentEnum.RADIO_FIELD]: RadioField,
    [FieldComponentEnum.TEXTAREA_FIELD]: Textareafield,
    [FieldComponentEnum.OBJECT_FIELD]: ObjectField,
    [FieldComponentEnum.GENERATION_INSTRUCTION_FIELD]: GenerationInstructionField,
    [FieldComponentEnum.ITEM_LIST_FIELD]: ItemListField,
    [FieldComponentEnum.NESTED_FORM]: NestedFormField,
    [FieldComponentEnum.DATE_FIELD]: DateField,
};

export default FIELD_COMPONENTS