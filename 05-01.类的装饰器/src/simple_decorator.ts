// 类的装饰器
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过 @ 符号来使用，只要类一定义就马上执行，拿到构造函数对类进行修改
// 一个类可以有多个装饰器，执行顺序从后往前执行

// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function(constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('dell');
//       };
//     };
//   } else {
//     return function(constructor: any) {};
//   }
// }

// testDecorator函数返回的内容作为装饰器
// @testDecorator(true)
// class Test {}

// const test = new Test();
// (test as any).getName();
