import { octokit, targetRepository } from "./setting.js";
import { writeFile } from "./writeFile.js";

const labels = [
  "経済",
  "医療・防災",
  "教育・子育て",
  "行政",
  "民主主義",
  "その他",
];

export async function fetchIssuesWithLabels(): Promise<void> {
  try {
    let hasNextPage = true;
    let endCursor = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let allIssues: any[] = [];

    while (hasNextPage) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await octokit.graphql(
        `
          query($owner: String!, $repo: String!, $labels: [String!], $after: String) {
            repository(owner:$owner, name: $repo) {
              issues(first:100, after: $after, labels: $labels, states:[OPEN,CLOSED]) {
                totalCount
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                  title
                  number
                  createdAt
                  url
                  state
                  body
                  comments {
                    totalCount
                  }
                  reactions(content: THUMBS_UP) {
                    totalCount
                  }
                  labels(first: 5) {
                    nodes {
                      name
                    }
                  }
                  updatedAt
                }
              }
            }
          }
        `,
        { ...targetRepository, labels, after: endCursor }
      );

      allIssues = allIssues.concat(response.repository.issues.nodes);
      hasNextPage = response.repository.issues.pageInfo.hasNextPage;
      endCursor = response.repository.issues.pageInfo.endCursor;
    }

    writeFile("issues", allIssues);
  } catch (error) {
    console.error(error);
  }
}
