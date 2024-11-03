// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITIORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Set to true if you want a 308 permanent redirect
      },
    ];
  },
};