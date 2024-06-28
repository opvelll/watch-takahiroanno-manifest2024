import fs from "fs";
import { filePath } from "./setting.js";

export const writeFile = (fileName: string, data: unknown): void => {
  fs.writeFileSync(filePath(fileName), JSON.stringify(data, null, 2));
};
