### 前言 为什么要使用 TS，什么样的场景适合使用 TS？
JavaScript是弱类型语言，可以为变量赋予任意类型的值，且可以随时对其进行改变（const除外），这会造成很多的“运行时”的未知问题。
而TypeScript的出现，把静态类型检测加入进来，且提前到了“编译期”，可以帮助开发者在编写代码的时候提前暴露一些潜在的问题。

在大型项目，多人协同开发的时候，非常适合使用ts来规范代码，代码的语义更加清晰，可读性可维护性更高，编写的代码也更健壮。

### 关于编译时和运行时，你是怎么理解的？
编译时: 就是编译器帮你把源代码翻译成机器能识别的代码。
运行时: 所谓运行时就是将代码在真实的宿主环境（浏览器 /node）中运行。

简单的讲开发过程中的代码运行属于编译时，生产环境中的代码运行属于运行时。

### TS无法直接运行在浏览器和node环境中，需要通过工具编译生成js文件才能运行
方法一：
全局安装typescript
```
npm install typescript -g
```
安装完之后可以使用tsc命令(typesctipt compiler)，后面跟要运行的ts文件，将ts文件编译成js文件
```
tsc demo.ts
```
运行完命令后会生成demo.js文件，之后通过下方命令即可在node环境下运行代码
```
node demo.js
```
创建tsconfig.json文件
```
tsc --init
```
方法二：
全局安装ts-node工具
```
npm install ts-node -g
```
安装完之后就不用像方法一那样先把ts文件编译成js文件，再运行js文件了。可以直接使用ts-node命令后面跟需要运行的文件即可
```
ts-node demo.ts
```
demo.ts文件的代码会直接执行

### TS 带来了那些优势：
1. 更好的错误提示，开发过程中就能通过提示发现一些潜在的问题，不用等到运行时
2. 更友好的编辑器自动提示
3. 语义清晰，代码可读性好

### 对于TS静态类型的理解
实际上在学TypeScript时就是在学TypeScript的静态类型以及TS相对于JS的衍生语法，静态类型可以帮助我们更直观的判断变量或者对象的属性内容是什么

基本类型
```
const count: number = 2019
```
count被定义为number基本类型，不仅意味着count的类型不能被修改，同时也意味着count具备了number类型的属性和方法，编辑器会给出属性和方法的提示

自定义类型
```
interface Point {
  x: number;
  y: number;
}

const point: Point = {
  x: 3,
  y: 4
};
```
对于上面代码的理解是point变量实际上一定是一个自定义的Point自定义类型，除了这层理解之外，实际上还应该理解point这个变量上具备Point类型所有的属性和方法，
Point类型具备x,y两个属性，当编写`point.`编辑器会给出x,y这两个属性的提示

### Typescript中的interface接口和type类型别名区别
interface 和 type 相类似，但并不完全一致

相同点：都可以描述一个对象或者函数

**对象类型**
```
interface Foo {
  a: string
}

type Foo {
  a: string
}
```
都是定义了一个有a属性的对象结构。

**函数类型**
函数类型其实由两个部分构成，参数类型和返回值类型
```
interface Foo {
  (a: string): string
}

type Foo = (a: string) => string
```
表示同一类型的函数。

不同点：
type 可以而 interface 不行
type 可以声明基本类型别名，联合类型，元组等类型等 interface接口只能定义对象或函数类型
```
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
 wong();
}
interface Cat {
 miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```
interface 可以而 type 不行
interface 能够声明合并
```
interface User {
 name: string
 age: number
}

interface User {
 sex: string
}

/*
User 接口为 {
 name: string
 age: number
 sex: string 
}
*/
```
在使用TypeScript时，通用规范是如果能用接口能表述就是用接口，否则再考虑使用type

## TypeScript声明文件解析

### 1.1 声明文件的定义
通俗地来讲，在 TypeScript 中以 .d.ts   为后缀的文件，我们称之为 TypeScript 声明文件。它的主要作用是描述 JavaScript 模块内所有导出接口的类型信息。

编辑器之所以能给出对应的语法提示是因为使用的包提供了声明文件。

### 1.2 什么时候需要写 TS 声明文件
在日常的开发中，绝大多数时候是不需要我们单独去编写一个 TS 声明文件的。如果我们的文件本身是用 TS 编写的，在编译的时候让 TS 自动生成声明文件，并在发布的时候将 .d.ts   文件一起发布即可。

总结了以下三种情况，需要我们手动定义声明文件：

1. 通过 script 标签引入的第三方库
一些通过 CDN 的当时映入的小的工具包，挂载了一些全局的方法，如果在 TS 中直接使用的话，会报 TS 语法错误，这时候就需要我们对这些全局的方法进行 TS 声明。

2. 使用的第三方 npm 包，但是没有提供声明文件
第三方 npm 包如果有提供声明文件的话，一般会以两种形式存在：一是  @types/xxx ，另外是在源代码中提供   .d.ts   声明文件（如果源代码中提供了就无须其他操作）。第一种的话一般是一些使用量比较高的库会提供，可以通过  npm i @type/xxx  尝试安装。如果这两种都不存在的话，那就需要我们自己来定义了。

3. 自身团队内比较优秀的 js 库或插件，为了提升开发体验

### 1.3 让 TS 在编译时自动生成  .d.ts  文件
只需要在  tsconfig.json  配置文件中开启即可，TS 编译时就会自动生成   .d.ts   声明文件：

```
{ "compilerOptions": { "declaration": true  } }
```