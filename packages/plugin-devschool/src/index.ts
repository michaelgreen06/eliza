import { Plugin } from "@elizaos/core";
import { helloWorldAction } from "./actions/helloworld.ts";

export * as actions from "./actions/index.ts";
export * as evaluators from "./evaluators/index.ts";
export * as providers from "./providers/index.ts";

export const devSchoolPlugin: Plugin = {
    name: "devschool ",
    description: "Dev School example plugin",
    actions: [helloWorldAction],
};
