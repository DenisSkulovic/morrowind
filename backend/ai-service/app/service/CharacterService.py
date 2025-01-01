import openai

class CharacterManager:
    def __init__(self):
        # Example in-memory storage
        self.characters = {}

    def get_character_context(self, character_id):
        return self.characters.get(character_id)

    def update_character_context(self, character_id, context):
        self.characters[character_id] = context

class AIHandler:
    def __init__(self):
        openai.api_key = "your_openai_api_key"

    async def get_response(self, character_context, user_input):
        prompt = f"""The character has the following traits:
        Personality: {character_context['personality']}
        Inventory: {character_context['inventory']}
        Facts: {character_context['facts']}
        Memory: {character_context['memory']}
        
        User input: {user_input}
        Respond as the character."""
        
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "system", "content": prompt}]
        )
        return response.choices[0].message["content"]
