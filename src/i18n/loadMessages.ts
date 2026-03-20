import { promises as fs } from "node:fs";
import path from "node:path";

const LOCALE_DIR = "src/common/var/locales";

export async function loadMessages(locale: string) {
  const dirPath = path.join(process.cwd(), LOCALE_DIR, locale);
  const files = await fs.readdir(dirPath);

  const messages: Record<string, string> = {};

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const filePath = path.join(dirPath, file);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(fileContent);

    Object.assign(messages, json);
  }

  return messages;
}
