import { ScaleTypeEnum } from "../enum/ScaleTypeEnum";
import { DialogueOption } from "./DialogueOption";

// this is the request object for the progressDialogue method that opens a websocket connection
export class ProgressDialogueRequest {
    public dialogueId!: string;
    public selectedPlayerDialogueOption!: DialogueOption;
    public scaleType!: ScaleTypeEnum;

    static validate(body: any): void {
        if (!body.dialogueId) throw new Error('The request is missing the dialogue ID.');
        if (!body.selectedPlayerDialogueOption) throw new Error('The request is missing the selected player dialogue option.');
        if (!body.scaleType) throw new Error('The request is missing the scale type.');
        if (!Object.values(ScaleTypeEnum).includes(body.scaleType)) throw new Error(`The scale type ${body.scaleType} is not supported.`);
    }

    static build(body: any): ProgressDialogueRequest {
        const request = new ProgressDialogueRequest();
        request.dialogueId = body.dialogueId;
        request.selectedPlayerDialogueOption = body.selectedPlayerDialogueOption;
        request.scaleType = body.scaleType;
        return request;
    }
}