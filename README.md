This is simple typescript project to replicate some issues related to `ts-node`
throwing an error "Cannot find module './hello.js'". Probably the issues are
related.

## ts-node cannot find dependent module

The issue has been described in the stackoverflow question
"[ts-node cannot find dependent module](https://stackoverflow.com/questions/77733794/ts-node-cannot-find-dependent-module)".

In order to replicate the issue clone this repository and run:

```shell
$ npm install
$ npm run build

$ npm run start
# this works and print "Hello World"

$ npm run ts-node
# this is failing with an error: Cannot find module './hello.js'

$ npm run tsx
# this works

$ npm run tsimp
# this also works
```

## tap cannot find dependent module

Very similar problem happening when trying to run tests using node `tap`:

```shell
$ npm install

$ npm run test
# this is failing with an error: cannot find module '../src/hello.js'
```

The problem above might be related to `ts-node` also since `tap` also uses it to
handle typescript. The issue has been raised here [tap cannot find dependent module](https://github.com/tapjs/tapjs/issues/991).
