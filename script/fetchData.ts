import { Octokit } from "octokit";
import { Endpoints } from "@octokit/types";
import fs from "fs";
import path from "path";
import { URL } from "url";

const octokit = new Octokit();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const filePath = (fileName: string) =>
  path.resolve(__dirname, `../../../src/assets/${fileName}.json`);
const targetRepository = { owner: "octocat", repo: "Hello-World" };

type RepoResponse = Endpoints["GET /repos/{owner}/{repo}"]["response"];

async function fetchRepo(): Promise<void> {
  try {
    const response: RepoResponse = await octokit.rest.repos.get(
      targetRepository
    );
    writeFile("repo", response.data);
  } catch (error) {
    console.log(error);
  }
}

type listIssueResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];

async function fetchIssuesWithLabels(): Promise<void> {
  try {
    const labels = [
      "経済",
      "医療・防災",
      "教育・子育て",
      "行政",
      "民主主義",
      "その他",
    ];
    const response: listIssueResponse = await octokit.rest.issues.listForRepo(
      targetRepository
    );
    const filteredIssues = response.data.filter((issue) =>
      issue.labels.some((label) => {
        if (typeof label === "string") {
          return labels.includes(label);
        } else if (label.name) {
          return labels.includes(label.name);
        }
      })
    );
    writeFile("issues", filteredIssues);
  } catch (error) {
    console.error(error);
  }
}

const writeFile = (fileName: string, data: unknown): void => {
  fs.writeFileSync(filePath(fileName), JSON.stringify(data, null, 2));
};

fetchRepo();
fetchIssuesWithLabels();
