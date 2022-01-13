### tsconfig.json编译配置文件
生产编译配置文件，全局安装TypeScript后可以使用tsc命令
```
tsc --init
```
如果使用 tsc demo.ts 命令，直接指定编译某 ts 文件为 js 文件，并不会用到 tsconfig.json 配置文件里面的内容，而是使用默认的配置。

而只有直接运行 tsc 这个命令，后面不带任何参数的时候，tsconfig.json 配置项里面的配置才会生效。

当运行 tsc 时会先去 tsconfig.json 中找对应的配置项，默认会对根目录下所有的 ts 文件统一进行编译。

tsconfig.json 中的 include 和 exclude 可以指定编译某部分ts文件或排除某部分ts文件不编译。

**运行 ts-node demo.js 会使用 tsconfig.json 里的配置项来进行编译。和tsc不同**