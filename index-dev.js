const { bootstrapServer, emitConfigs } = require('./environment');

(async () => {
  const app = bootstrapServer();

  await emitConfigs();
  await app.start();
})();
