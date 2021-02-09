const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  auth: `9455d141df126d02fbac8059d7bd32cfb8ac75e2`,
});

let createIssue = async (title, body, lables) => {
  await octokit.request("POST / repos/Kinesys/Kinesys/issues", {
    // ('POST / repos / 계정 이름 / repo이름 / issues)
    owner: "octocat",
    repo: "Kinesys",
    title: title,
    body: body,
    lables: lables,
  });
};

createIssue("Test Issue - Haruster", "Github Issue", ["bug"]); // (title, body, lables) labels는 배열형태로(['bug]) 처리
