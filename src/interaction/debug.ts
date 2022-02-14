import type { Environment } from "../engine/Environment";
import type { Interpreter } from "../engine/Interpreter";

export function logenv(this: Interpreter, env: Environment): string {
    return `${env.id}: {
${env
    .entries()
    .map(([k, v]) => `    "${k}": ${this.stringify(v)},\n`)
    .join("")}${
        env.parent
            ? logenv
                  .call(this, env.parent)
                  .split("\n")
                  .map((l) => `    ${l}`)
                  .join("\n")
            : ""
    }
}`;
}
