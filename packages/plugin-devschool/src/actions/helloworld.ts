import { HandlerCallback } from "@elizaos/core";
import {
    ActionExample,
    IAgentRuntime,
    Memory,
    State,
    type Action,
} from "@elizaos/core";

export const helloWorldAction: Action = {
    name: "HELLO_WORLD",
    similes: ["HELLO  ", ,],
    validate: async (_runtime: IAgentRuntime, _message: Memory) => {
        return true;
    },
    description: "Make a cool hello world ascii art.",
    handler: async (
        _runtime: IAgentRuntime,
        _message: Memory,
        _state: State,
        _options: { [key: string]: unknown },
        _callback: HandlerCallback
    ): Promise<boolean> => {
        const helloWorld = `
        This is definitely working!
 _    _      _ _        __          __        _     _
| |  | |    | | |       \ \        / /       | |   | |
| |__| | ___| | | ___    \ \  /\  / /__  _ __| | __| |
|  __  |/ _ \ | |/ _ \    \ \/  \/ / _ \| '__| |/ _' |
| |  | |  __/ | | (_) |    \  /\  / (_) | |  | | (_| |
|_|  |_|\___|_|_|\___/      \/  \/ \___/|_|  |_|\__,_|
        `;

        _callback({
            text: helloWorld,
        });
        return true;
    },
    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "please say hello world in ascii" },
            },
            {
                user: "{{user2}}",
                content: { text: "", action: "HELLO_WORLD" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "can you make a hello world ascii art?" },
            },
            {
                user: "{{user2}}",
                content: { text: "", action: "HELLO_WORLD" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "print hello world in ascii" },
            },
            {
                user: "{{user2}}",
                content: { text: "", action: "HELLO_WORLD" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "display hello world ascii art" },
            },
            {
                user: "{{user2}}",
                content: { text: "", action: "HELLO_WORLD" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "give me a hello world ascii drawing" },
            },
            {
                user: "{{user2}}",
                content: { text: "", action: "HELLO_WORLD" },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: { text: "hello world in cool ascii text please" },
            },
            {
                user: "{{user2}}",
                content: { text: "", action: "HELLO_WORLD" },
            },
        ],
    ] as ActionExample[][],
} as Action;
