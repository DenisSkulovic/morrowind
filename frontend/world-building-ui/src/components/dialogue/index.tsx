import React, { useState } from "react";
import { useDialogueStream } from "../../hooks/useDialogueStream";
import { DialogueMessage } from "../../store/slices/dialogueSlice";
import { Box, Paper, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const MessageContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    maxWidth: "80%",
}));

// TODO clearly this needs a lot of depth and nuance. Who is talking to who, etc. This is just a shallow draft.

const DialogueComponent = () => {
    const { dialogueStream, sendUserMessage, reset } = useDialogueStream();
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (!input.trim()) return;

        const request = {
            contentType: "exampleType",
            parameters: { exampleParam: "value" },
            requestId: "unique-id",
        };

        sendUserMessage(input, request);
        setInput(""); // Clear the input field
    };

    return (
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ flexGrow: 1, overflow: "auto" }}>
                {dialogueStream.history.map((message: DialogueMessage, index: number) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: message.sender === "ai" ? "flex-start" : "flex-end"
                        }}
                    >
                        <MessageContainer>
                            <Typography variant="subtitle2" color="primary">
                                {message.sender === "ai" ? "AI" : "You"}
                            </Typography>
                            <Typography variant="body1">
                                {message.content}
                            </Typography>
                        </MessageContainer>
                    </Box>
                ))}
            </Box>
            <Box sx={{ minHeight: 40 }}>
                {dialogueStream.isLoading && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CircularProgress size={20} />
                        <Typography variant="body2">AI is typing...</Typography>
                    </Box>
                )}
                {dialogueStream.error && (
                    <Typography color="error">Error: {dialogueStream.error}</Typography>
                )}
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message here..."
                    variant="outlined"
                    size="small"
                />
                <Button
                    variant="contained"
                    onClick={handleSendMessage}
                    disabled={dialogueStream.isLoading}
                >
                    Send
                </Button>
                <Button
                    variant="outlined"
                    onClick={reset}
                    color="secondary"
                >
                    Reset
                </Button>
            </Box>
        </Box>
    );
};

export default DialogueComponent;
