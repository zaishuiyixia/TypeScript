### 监听.ts文件改变并自动执行编译生成js文件
```
tsc -w
```
### 监听文件变化自动执行nodemon后的对应命令
默认nodemon不会监听.ts文件的变化，如果有需要可以自行配置
```
nodemon node ./build/crowller.js
```

### concurrently统一命令行工具
并行执行多个命令