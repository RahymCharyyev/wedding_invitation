module.exports = {
  apps: [
    {
      name: 'wedding',
      script: 'npm',
      args: 'start',
      time: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
