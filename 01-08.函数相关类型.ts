// function add(first: number, second: number): number {
//   return first + second;
// }
// void它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
// function sayHello(): void {
//   console.log('hello');
// }

// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// function errorEmitter(): never {
//   while(true) {}
// }
// 解构赋值的类型注解写法
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumber({ first }: { first: number }) {
  return first;
}

const total = add({ first: 1, second: 2 });
const count = getNumber({ first: 1 });
