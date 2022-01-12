### 前言
JavaScript是弱类型语言，可以为变量赋予任意类型的值，且可以随时对其进行改变（const除外）。
这会造成很多的“运行时”的未知问题，而TypeScript的出现，把变量类型检查加入进来，且提前到了“编译期”，可以帮助我们提前暴露一些潜在的问题。

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