import { octokit, targetRepository } from "./setting.js";
import { writeFile } from "./writeFile.js";

export async function fetchIssuesWithLabels(): Promise<void> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await octokit.graphql(
      `
  query($owner: String!, $repo: String!) {
    repository(owner:$owner, name: $repo) {
      issues(first: 100) {
        totalCount
        nodes {
          title
          createdAt
          url
          state
          body
        }
      }
    }
  }
        `,
      targetRepository
    );
    writeFile("issues", response.repository.issues.nodes);
  } catch (error) {
    console.error(error);
  }
}
