from fastapi import FastAPI, HTTPException
import grpc
from character_service import CharacterManager, AIHandler

app = FastAPI()

character_manager = CharacterManager()
ai_handler = AIHandler()

@app.post("/simulate-dialogue")
async def simulate_dialogue(character_id: str, user_input: str):
    character_context = character_manager.get_character_context(character_id)
    if not character_context:
        raise HTTPException(status_code=404, detail="Character not found")
    
    response = await ai_handler.get_response(character_context, user_input)
    return {"response": response}
