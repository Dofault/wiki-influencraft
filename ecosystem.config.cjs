module.exports = {
  apps: [
    {
      name: 'wiki-influencraft',
      script: '.output/server/index.mjs',
      cwd: '/home/dofault/influencraft/web/wiki-influencraft',
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        STUDIO_GITHUB_CLIENT_ID: 'Ov23libvQv5hFExk4bPK',
STUDIO_GITHUB_CLIENT_SECRET: '25e4c98c32ee4c1d3d3d4db80e6a2a6323a010ef'
      }
    }
  ]
}
