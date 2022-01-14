### npm run dev
```
"scripts": {
    "dev:build": "tsc -w",
    "dev:start": "nodemon node ./build/index.js",
    "dev": "tsc && concurrently npm:dev:*"
  },
```
会先执行tsc命令后再执行concurrently npm:dev:*，如果直接"dev": "concurrently npm:dev:*"，tsc -w命令还没有执行完编译文件还没生成，就运行了nodemon node ./build/index.js会报错