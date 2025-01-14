import { DialogueOption } from "./DialogueOption";

// this is the request object for the progressDialogue method that opens a websocket connection
export class ProgressDialogueRequest {
    public dialogueId!: string;
    public selectedPlayerDialogueOption!: DialogueOption;

    static validate(body: any): void {
        if (!body.dialogueId) throw new Error('The request is missing the dialogue ID.');
        if (!body.selectedPlayerDialogueOption) throw new Error('The request is missing the selected player dialogue option.');
    }

    static build(body: any): ProgressDialogueRequest {
        const request = new ProgressDialogueRequest();
        request.dialogueId = body.dialogueId;
        request.selectedPlayerDialogueOption = body.selectedPlayerDialogueOption;
        return request;
    }
}