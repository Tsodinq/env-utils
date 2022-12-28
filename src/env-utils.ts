import { appendFileSync, readFileSync, writeFileSync } from "fs";

function appendEnvVar(path: string, key: string, value: string) {
  appendFileSync(path, `${key}=${value}`, { encoding: "utf8" });
}

function setEnvVar(path: string, key: string, value: string) {
  const env = readFileSync(path, { encoding: "utf8" });

  const lines = env.split("\n");
  const line = lines.find((line) => line.startsWith(`${key}=`));

  if (line) {
    const index = lines.indexOf(line);
    lines[index] = `${key}=${value}`;
  } else {
    lines.push(`${key}=${value}`);
  }

  writeFileSync(path, lines.join("\n"), { encoding: "utf8" });
}

export { appendEnvVar, setEnvVar };
