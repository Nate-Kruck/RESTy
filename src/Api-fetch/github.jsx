export const getGitHubApi = (endPoints) => {
  // eslint-disable-next-line max-len
  return fetch(`https://api.github.com/repos/${endPoints[0]}/${endPoints[1]}`)
    .set('Authorization', `token ${process.env.MY_GITHUB_TOKEN}`)
    .then(res => res.json())
    .then(json => json.results);
};
