const bootstrap = require('@wix/wix-bootstrap-ng');

bootstrap()
  // https://github.com/wix-platform/wix-node-platform/tree/master/greynode/wix-bootstrap-greynode
  .use(require('@wix/wix-bootstrap-greynode'))
  // https://github.com/wix-platform/wix-node-platform/tree/master/bootstrap-plugins/hadron/wix-bootstrap-hadron
  .use(require('@wix/wix-bootstrap-hadron'))
  // https://github.com/wix-private/fed-infra/tree/master/wix-bootstrap-renderer
  .use(require('@wix/wix-bootstrap-renderer'))
  .express('./dist/server')
  .start();
