import { octokit, targetRepository } from "./setting.js";
import { writeFile } from "./writeFile.js";

export async function fetchIssuesWithLabels(): Promise<void> {
  try {
    const labels = [
      "経済",
      "医療・防災",
      "教育・子育て",
      "行政",
      "民主主義",
      "その他",
    ];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await octokit.graphql(
      `
  query($owner: String!, $repo: String!, $labels: [String!]) {
    repository(owner:$owner, name: $repo) {
      issues(last: 20, labels: $labels) {
        totalCount
        nodes {
          title
          createdAt
          url
          state
          body
          labels(first: 5) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
        `,
      { ...targetRepository, labels }
    );
    writeFile("issues", response.repository.issues.nodes);
  } catch (error) {
    console.error(error);
  }
}
