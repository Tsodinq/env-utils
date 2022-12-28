"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEnvVar = exports.appendEnvVar = void 0;
const fs_1 = require("fs");
function appendEnvVar(path, key, value) {
    (0, fs_1.appendFileSync)(path, `${key}=${value}`, { encoding: "utf8" });
}
exports.appendEnvVar = appendEnvVar;
function setEnvVar(path, key, value) {
    const env = (0, fs_1.readFileSync)(path, { encoding: "utf8" });
    const lines = env.split("\n");
    const line = lines.find((line) => line.startsWith(`${key}=`));
    if (line) {
        const index = lines.indexOf(line);
        lines[index] = `${key}=${value}`;
    }
    else {
        lines.push(`${key}=${value}`);
    }
    (0, fs_1.writeFileSync)(path, lines.join("\n"), { encoding: "utf8" });
}
exports.setEnvVar = setEnvVar;
