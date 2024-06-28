import { URL } from "url";
import dotenv from "dotenv";
import { Octokit } from "octokit";
import path from "path";
//.envファイルを読み込む
dotenv.config();
export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const __dirname = path.dirname(new URL(import.meta.url).pathname);
export const filePath = (fileName: string) =>
  path.resolve(__dirname, `../../../src/assets/${fileName}.json`);
export const targetRepository = { owner: "octocat", repo: "Spoon-Knife" };
