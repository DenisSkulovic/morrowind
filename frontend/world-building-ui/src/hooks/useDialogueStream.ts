import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
    startStream,
    addChunk,
    completeStream,
    addUserMessage,
    failStream,
    resetStream,
    DialogueStreamState,
} from "../store/slices/dialogueSlice";
import { ContentService } from "../services/ContentService";

export const useDialogueStream = (playerCharacterId: string, aiCharacterId: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const dialogueStream: DialogueStreamState = useSelector((state: RootState) => state.dialogue);

    const sendUserMessage = async (message: string, request: { contentType: string; parameters: any; requestId: string }) => {
        // Add the user's message to the history
        dispatch(addUserMessage(message));

        // Start the AI response stream
        dispatch(startStream());
        const contentService = new ContentService();

        try {
            await contentService.generateContentAIStreaming(request, (chunk) => {
                dispatch(addChunk(chunk));
            });
            dispatch(completeStream());
        } catch (error: any) {
            dispatch(failStream(error.message || "An error occurred during streaming."));
        }
    };

    const reset = () => {
        dispatch(resetStream());
    };

    return {
        dialogueStream,
        sendUserMessage,
        reset,
    };
};
