This is source code accompanying the stackoverflow question "[ts-node cannot find dependent module](https://stackoverflow.com/questions/77733794/ts-node-cannot-find-dependent-module)".

In order to replicate the issue clone this repository and run:

```
npm install
npm run build

npm run start
// this works and print "Hello World"

npm run ts-node
// this is failing with error: Error: Cannot find module './hello.js'

npm run tsx
// this works

npm run tsimp
// this also works
```
