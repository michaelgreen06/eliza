import { Plugin } from "@elizaos/core";
import { noneAction } from "./actions/none.ts";
import { factEvaluator } from "./evaluators/fact.ts";
import { timeProvider } from "./providers/time.ts";

export * as actions from "./actions/index.ts";
export * as evaluators from "./evaluators/index.ts";
export * as providers from "./providers/index.ts";

export const devSchoolPlugin: Plugin = {
    name: "devschool ",
    description: "Dev School example plugin",
    actions: [noneAction],
    evaluators: [factEvaluator],
    providers: [timeProvider],
};
