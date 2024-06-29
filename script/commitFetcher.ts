import { Endpoints } from "@octokit/types";
import { octokit, targetRepository } from "./setting.js";
import { writeFile } from "./writeFile.js";

async function fetchManifestsFilesCommits() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await octokit.graphql(
      `
  query($owner: String!, $repo: String!, $path: String!) {
    repository(owner: $owner, name: $repo) {
      ref(qualifiedName: "main") {
        target {
          ... on Commit {
            history(path: $path) {
              edges {
                node {
                  oid
                  message
                  committedDate
                  author {
                    name
                    email
                  }
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`,
      targetRepository
    );

    return response.repository.ref.target.history.edges;
  } catch (error) {
    console.error(error);
  }
}

type CommitResponse =
  Endpoints["GET /repos/{owner}/{repo}/commits/{ref}"]["response"];

async function getCommitDetails(commitSha: string) {
  try {
    const response: CommitResponse = await octokit.rest.repos.getCommit({
      ...targetRepository,
      ref: commitSha,
    });
    // filesのfile nameプロパティが指定したファイルパスのフォルダに一致するものを返す
    const files = response.data.files?.filter((file) => {
      return file.filename.includes("docs/manifest");
    });
    return files || [];
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCommitsWithManifestChanges() {
  const commits = await fetchManifestsFilesCommits();
  const updatedCommits = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commits.map(async (commit: any) => {
      const commitDetails = await getCommitDetails(commit.node.oid);
      return { ...commit.node, files: commitDetails };
    })
  );
  writeFile("commits", updatedCommits);
}
