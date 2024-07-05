import { octokit, targetRepository } from "./setting.js";
import { writeFile } from "./writeFile.js";

export async function fetchPullRequests(): Promise<void> {
  try {
    let hasNextPage = true;
    let endCursor = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let allPullRequests: any[] = [];

    while (hasNextPage) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response: any = await octokit.graphql(
        `
          query($owner: String!, $repo: String!, $after: String) {
            repository(owner:$owner, name: $repo) {
                pullRequests(first:100, after: $after, states:[OPEN,CLOSED,MERGED]) {
                totalCount
                pageInfo {
                  hasNextPage
                  endCursor
                }
                nodes {
                    number
                    createdAt
                    title
                    body
                    url
                    state
                    comments(first: 1) {
                        nodes {
                        body
                        }
                    }
                    timelineItems(itemTypes: [CONNECTED_EVENT], first: 5) {
                        nodes {
                        ... on ConnectedEvent {
                            subject {
                            ... on Issue {
                                number
                                title
                                url
                            }
                            }
                        }
                        }
                    }
                }
              }
            }
          }
        `,
        { ...targetRepository, after: endCursor }
      );

      allPullRequests = allPullRequests.concat(
        response.repository.pullRequests.nodes
      );
      hasNextPage = response.repository.pullRequests.pageInfo.hasNextPage;
      endCursor = response.repository.pullRequests.pageInfo.endCursor;
    }

    writeFile("pullRequests", allPullRequests);
  } catch (error) {
    console.error(error);
  }
}
