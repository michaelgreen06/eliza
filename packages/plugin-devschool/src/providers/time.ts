import { IAgentRuntime, Memory, Provider, State } from "@elizaos/core";

const randomEmotionProvider: Provider = {
    get: async (_runtime: IAgentRuntime, _message: Memory, _state?: State) => {
        const emotions = {
            happy: _runtime.character.name + " is feeling joyful and upbeat",
            sad: _runtime.character.name + " is feeling down and melancholic",
            angry:
                _runtime.character.name +
                " is feeling frustrated and irritated",
            excited:
                _runtime.character.name +
                " is feeling enthusiastic and energized",
            anxious: _runtime.character.name + " is feeling worried and uneasy",
            peaceful: _runtime.character.name + " is feeling calm and tranquil",
            confused:
                _runtime.character.name + " is feeling puzzled and uncertain",
            tired:
                _runtime.character.name + " is feeling exhausted and drained",
            proud:
                _runtime.character.name +
                " is feeling accomplished and satisfied",
            grateful:
                _runtime.character.name +
                " is feeling thankful and appreciative",
        };

        const emotionKeys = Object.keys(emotions);
        const randomKey =
            emotionKeys[Math.floor(Math.random() * emotionKeys.length)];

        return emotions[randomKey];
    },
};
export { randomEmotionProvider };
