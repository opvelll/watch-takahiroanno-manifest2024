import { URL } from "url";
import dotenv from "dotenv";
import { Octokit } from "octokit";
import path from "path";
//.envファイルを読み込む
dotenv.config();
export const octokit = new Octokit({ auth: process.env.MY_GITHUB_TOKEN });
//__dirnameを定義
const __dirname = path.dirname(new URL(import.meta.url).pathname);
//ファイルパスを定義
export const filePath = (fileName: string) =>
  path.resolve(__dirname, `../../../src/assets/${fileName}.json`);
//リポジトリ情報を定義
export const targetRepository = {
  owner: "takahiroanno2024",
  repo: "election2024",
  path: "docs/manifest",
};
