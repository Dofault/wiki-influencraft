module.exports = {
  apps: [
    {
      name: 'wiki-influencraft',
      script: '.output/server/index.mjs',
      cwd: '/home/dofault/influencraft/web/wiki-influencraft',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3003,
        STUDIO_GITHUB_CLIENT_ID: process.env.STUDIO_GITHUB_CLIENT_ID,
        STUDIO_GITHUB_CLIENT_SECRET: process.env.STUDIO_GITHUB_CLIENT_SECRET
      }
    }
  ]
}
