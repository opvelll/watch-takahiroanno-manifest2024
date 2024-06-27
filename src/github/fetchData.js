import { Octokit } from "octokit";
import fs from 'fs';
import path from 'path';

const octokit = new Octokit();

async function fetchRepo() {
    try {

        const response = await octokit.rest.repos.get({
            owner: 'octocat',
            repo: 'Hello-World',
        });

        //fsでsrc/assets/repo.jsonに書き込む
        const json = JSON.stringify(response.data, null, 2);
        const __dirname = new URL(import.meta.url).pathname
        fs.writeFileSync(path.resolve(__dirname, '../../assets/repo.json'), json);

    } catch (error) {
        console.log(error);
    }
}

fetchRepo();