# Sample application to test MMS with Docker

## Requirements
1. Docker installed and running
2. VS Code Installed
3. VS Code Extension `ms-vscode-remote.remote-containers`

## Setup

1. Run Docker Locally
2. Type `docker-compose up --build`
3. Wait for containers to come online
4. Open this source code in VS Code
5. In the bottom left corner click the >< green icon
6. Select `Reopen in Container`
7. Wait for extensions to install
8. Once container is running, in the integrated terminal run `yarn test`

This will cause MMS to stall when executing `await MongoMemoryServer.create();`


## Common Errors

If you recieve the following error while trying to run Jest:

```text
node:internal/modules/cjs/loader:998
  throw err;
  ^

Error: Cannot find module '/root/.vscode-server/data/User/workspaceStorage/a8cf8bbcc02a26cc5cd90655c8ae2c00/ms-vscode.js-debug/bootloader.js'
Require stack:
- internal/preload
    at Module._resolveFilename (node:internal/modules/cjs/loader:995:15)
    at Module._load (node:internal/modules/cjs/loader:841:27)
    at Module.require (node:internal/modules/cjs/loader:1061:19)
    at Module._preloadModules (node:internal/modules/cjs/loader:1336:12)
    at loadPreloadModules (node:internal/process/pre_execution:597:5)
    at prepareMainThreadExecution (node:internal/process/pre_execution:104:3)
    at node:internal/main/run_main_module:10:1 {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'internal/preload' ]
}
```

Do the following:

1. Click on Code
2. Open Preferences > Settings
3. Search for `Auto Attach Filter`
4. Click the dropdown and select Disable then reselect the option it was previously on
5. Retry test
