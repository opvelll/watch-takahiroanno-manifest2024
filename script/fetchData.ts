import { Endpoints } from "@octokit/types";
import { octokit, targetRepository } from "./setting.js";
import { writeFile } from "./writeFile.js";
import { fetchIssuesWithLabels } from "./issuesFetcher.js";

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

fetchRepo();
fetchIssuesWithLabels();
