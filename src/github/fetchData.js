import { Octokit } from "octokit";
import fs from 'fs';
import path from 'path';

const octokit = new Octokit();
const __dirname = new URL(import.meta.url).pathname;
const targetRepository = { owner: 'octocat', repo: 'Hello-World' };

async function fetchRepo() {
    try {
        const response = await octokit.rest.repos.get(targetRepository);
        writeFile('repo', response.data);
    } catch (error) {
        console.log(error);
    }
}

async function fetchIssuesWithLabels() {
    try {
        const labels = ['経済', '医療・防災', '教育・子育て', '行政', '民主主義', 'その他'];
        const response = await octokit.rest.issues.listForRepo(targetRepository);
        const filteredIssues = response.data.filter(issue =>
            issue.labels.some(label => labels.includes(label.name))
        );
        writeFile('issues', filteredIssues);
    } catch (error) {
        console.error(error);
    }
}

const writeFile = (fileName, data) => {
    fs.writeFileSync(path.resolve(__dirname, `../../assets/${fileName}.json`), JSON.stringify(data, null, 2));
}

fetchRepo();
fetchIssuesWithLabels();