import { getInput, setFailed } from "@actions/core";
import github, { GitHub } from "@actions/github";
import generateGif from "./gifGenerator";

async function run() {
  try {
    const githubToken = getInput("GITHUB_TOKEN");

    const { context } = github;
    if (context.payload.pull_request == null) {
      setFailed("No pull request found.");
    }

    const pullRequestNumber = context.payload.pull_request.number;
    const prTitle = context.payload.pull_request.title;
    const octokit = new GitHub(githubToken);
    const message = generateGif(prTitle);

    octokit.issues.createComment({
      ...context.repo,
      issue_number: pullRequestNumber,
      body: message,
    });
  } catch (error) {
    setFailed(error.message);
  }
}

run();
