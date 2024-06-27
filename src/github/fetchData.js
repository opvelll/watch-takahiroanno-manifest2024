import { Octokit } from "octokit";

const octokit = new Octokit();

async function fetchRepo() {
    const response = await octokit.rest.repos.get({
        owner: 'octocat',
        repo: 'Hello-World',
    });
    console.log(response.data);
}

fetchRepo();